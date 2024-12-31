import React, { useState, useEffect } from "react";
import axios from "axios";

const Typing = () => {
    const [wordsJoin, setWordsJoin] = useState([]); // State menyimpan kata dari Laravel API
    const [words, setWords] = useState([]); // State untuk menyimpan kata dari Laravel API
    const [loading, setLoading] = useState(true); // State untuk loading
    const [error, setError] = useState(null); // State untuk error
    const [isRunning, setIsRunning] = useState(false); // State untuk running

    const [jumKataBenar, setJumKataBenar] = useState(0); // Menyimpan jumlah kata yang benar
    const [jumKataSalah, setJumKataSalah] = useState(0); // Menyimpan jumlah kata yang salah
    const [userInput, setUserInput] = useState(""); // Input pengguna
    const [ellapsedTime, setEllapsedTime] = useState(60); // Waktu mulai mengetik
    const [wpm, setWpm] = useState(0); // Words Per Minute (WPM)
    const [akurasi, setAkurasi] = useState(0); // Akurasi mengetik

    const [koreksiKata, setKoreksiKata] = useState(true);

    const [sec, setNum] = useState(60);

    const fetchWords = async () => {
        setLoading(true); // Mulai loading
        if (isRunning) {
            setIsRunning(false);
        }
        setWpm(0);
        setJumKataBenar(0);
        setJumKataSalah(0);
        setAkurasi(0);
        setNum(60);
        setEllapsedTime(60);
        setError(null); // Reset error
        setUserInput("");
        setKoreksiKata(true);
        try {
            const response = await axios.get("http://localhost:8000/api/words");
            setWords(response.data);
            setWordsJoin(response.data.slice(1).join(" "));
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useState(() => {
        fetchWords();
    }, []);

    const countDown = () => {
        if (sec == 60) {
            setNum(sec - 45);
            setEllapsedTime(ellapsedTime - 45);
        } else if (sec == 30) {
            setNum(sec + 30);
            setEllapsedTime(ellapsedTime + 30);
        } else {
            setNum(sec + 15);
            setEllapsedTime(ellapsedTime + 15);
        }
    };

    const startCountDown = () => {
        if (!isRunning) {
            setIsRunning(true);
        }
    };

    useEffect(() => {
        let timer;
        if (isRunning && sec > 0) {
            timer = setInterval(() => {
                setNum((prevTime) => prevTime - 1); // Kurangi waktu setiap detik
            }, 1000);
        } else if (sec === 0) {
            setUserInput("");
            setIsRunning(false);
            setWpm(((jumKataBenar + jumKataSalah) / ellapsedTime) * 60);
            setAkurasi((jumKataBenar / (jumKataBenar + jumKataSalah)) * 100);
        }

        return () => clearInterval(timer);
    }, [sec, isRunning]);

    const handleKeyPress = (event) => {
        startCountDown();

        // console.log(event.code);
        if (isRunning) {
            if (event.code == "Space") {
                if (userInput == words[0]) {
                    setJumKataBenar(jumKataBenar + 1);
                } else {
                    setJumKataSalah(jumKataSalah + 1);
                }
                setUserInput("");
                setKoreksiKata(true);
                words.shift();
                setWordsJoin(words.slice(1).join(" "));
            }
        }
    };

    const handleChange = (e) => {
        const kataPertama = Array.from(words[0]);
        const panjangValue = e.target.value.length;
        const input = e.target.value;

        if (input.slice(-1) === " ") {
            return;
        } else {
            if (
                e.target.value[panjangValue - 1] ==
                    kataPertama[panjangValue - 1] &&
                e.target.value == words[0].slice(0, panjangValue)
            ) {
                setKoreksiKata(true);
            } else {
                setKoreksiKata(false);
            }
        }
        setUserInput(e.target.value.trim());
    };

    const handleKeyboard = (e) => {
        console.log(e.key); //TODO membuat button keyboard dapat diklik sebagaimana mestinya!
    };

    const keys = [
        [
            "`",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "0",
            "-",
            "=",
            "Backspace",
        ],
        [
            "Tab",
            "Q",
            "W",
            "E",
            "R",
            "T",
            "Y",
            "U",
            "I",
            "O",
            "P",
            "[",
            "]",
            "\\",
        ],
        [
            "Caps",
            "A",
            "S",
            "D",
            "F",
            "G",
            "H",
            "J",
            "K",
            "L",
            ";",
            "'",
            "Enter",
        ],
        ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
        ["Ctrl", "Win", "Alt", "Space", "Alt", "Win", "Menu", "Ctrl"],
    ];

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const [activeKey, setActiveKey] = useState(null);
    const [keyColor, setKeyColor] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            // console.log(e.key);
            setKeyColor(getRandomColor());
            if (e.code === "Space") {
                setActiveKey("SPACE");
            } else if (e.key === "Control") {
                setActiveKey("CTRL");
            } else if (e.key === "CapsLock") {
                setActiveKey("CAPS");
            } else if (e.key === "ContextMenu") {
                setActiveKey("MENU");
            } else if (e.key === "Meta") {
                setActiveKey("WIN");
            } else {
                setActiveKey(e.key.toUpperCase());
            }
        };

        const handleKeyUp = () => {
            setActiveKey(null);
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        // Cleanup event listener
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    return (
        <>
            <div className="h-full w-full max-w-screen-lg mx-auto flex flex-col items-center mt-8">
                <div className="flex justify-between w-full max-w-screen-lg mx-auto">
                    <div className="flex flex-row items-center">
                        <img
                            className="w-10 h-10 mr-4"
                            src="/images/logo-typing-test.png"
                            alt="Logo"
                        />
                        <h1 className="text-2xl font-bold text-[#ffe282]">
                            Typing Test
                        </h1>
                    </div>
                    <h1 className="text-xl font-bold text-white"></h1>
                </div>

                <div className="flex justify-between w-full  mt-12">
                    <h1 className="text-lg font-bold text-cyan-400 antialiased">
                        {wpm} WPM
                    </h1>
                    <h1 className="text-lg font-bold text-cyan-400 antialiased">
                        Akurasi {akurasi.toFixed(2)}
                        <span className="font-sans text-base ml-1">%</span>
                    </h1>
                </div>
                <div className="box bg-slate-900 outline outline-2 outline-offset-0 outline-blue-900 p-8 w-full rounded mx-auto mt-2">
                    <div className="mb-4 leading-relaxed text-white line-clamp-1 text-2xl">
                        {loading && <p>Loading...</p>} {/* Loading */}
                        {error && <p>Error: {error}</p>} {/* Error */}
                        {!loading && !error && (
                            <p>
                                {koreksiKata ? (
                                    <span className="px-2 rounded bg-slate-950 relative inline-block">
                                        <span className="relative text-white">
                                            {words[0]}
                                        </span>
                                    </span>
                                ) : (
                                    <span className="px-2 rounded bg-slate-950 relative inline-block">
                                        <span className="relative text-red-600">
                                            {words[0]}
                                        </span>
                                    </span>
                                )}{" "}
                                {wordsJoin}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-warp justify-center">
                        <input
                            type="text"
                            id="default-input"
                            value={userInput}
                            onChange={handleChange}
                            onKeyDown={handleKeyPress}
                            disabled={wpm}
                            autoComplete="off"
                            className="bg-slate-950 border border-gray-600 text-gray-900 text-sm rounded-md block w-full p-2.5 dark:placeholder-gray-400 dark:text-white"
                        />
                        <button
                            className="mx-2 rounded-md bg-[#ffda5e] hover:bg-[#ffe48e] min-w-[53px] max-h-[42px] font-base text-xl text-mainBackground text-center"
                            id="countDown"
                            disabled={isRunning}
                            onClick={countDown}
                        >
                            {sec}
                        </button>

                        <button
                            onClick={fetchWords}
                            className="rounded-md bg-[#ffda5e] hover:bg-[#ffe48e] max-h-[42px] min-w-[42px] py-2 px-2"
                            disabled={loading}
                        >
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    className="fill-mainBackground"
                                    d="M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0c0 0 0 0 0 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l7.6 0 .7 0L168 288c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6 0-.7 0-7.6z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex justify-between w-full mt-5">
                    <h1 className="text-lg font-bold text-lime-500">
                        {jumKataBenar} Kata yang benar
                    </h1>
                    <h1 className="text-lg font-bold text-red-600">
                        {jumKataSalah} Kata yang salah
                    </h1>
                </div>

                <div className="flex flex-col items-center mt-10">
                    {keys.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="flex justify-center mb-1"
                        >
                            {row.map((key, keyIndex) => (
                                <button
                                    onClick={handleKeyboard}
                                    key={keyIndex}
                                    style={{
                                        backgroundColor:
                                            key.toUpperCase() == activeKey
                                                ? keyColor
                                                : "",
                                    }}
                                    className={`m-0.5 p-2 w-12 h-12 text-center text-base bg-slate-900 text-white border border-blue-900 rounded
                                        ${
                                            key === "Space"
                                                ? "w-[325px] first:"
                                                : ""
                                        }
                                        ${key === "Backspace" ? "w-[96px]" : ""}
                                        ${key === "Enter" ? "w-[110px]" : ""}
                                        ${key === "Caps" ? "w-[86px]" : ""}
                                        ${
                                            rowIndex === 3 && keyIndex === 0
                                                ? "w-[112px]"
                                                : ""
                                        }
                                        ${
                                            rowIndex === 3 && keyIndex === 11
                                                ? "w-[136px]"
                                                : ""
                                        }
                                        ${key === "Tab" ? "w-[72px]" : ""}
                                        ${key === "\\" ? "w-[72px]" : ""}
                                        ${key === "Ctrl" ? "w-[60px]" : ""}
                                        ${key === "Win" ? "w-[60px]" : ""}
                                        ${key === "Alt" ? "w-[60px]" : ""}
                                        ${key === "Menu" ? "w-[60px]" : ""}
                                        `}
                                >
                                    {key}
                                </button>
                                // ${key === "`" ? "opacity-0" : ""}
                                // ${key === "[" ? "opacity-0" : ""}
                                // ${key === "]" ? "opacity-0" : ""}
                                // ${key === ";" ? "opacity-0" : ""}
                                // ${key === "'" ? "opacity-0" : ""}
                                // ${key === "," ? "opacity-0" : ""}
                                // ${key === "." ? "opacity-0" : ""}
                                // ${key === "/" ? "opacity-0" : ""}
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Typing;
