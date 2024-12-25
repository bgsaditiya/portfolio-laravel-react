import React from "react";
import Navbar from "../Components/Navbar.jsx";

export default function Home({ name }) {
    const lineHeight = 1.25 * 16; // 1.5rem (24px) asumsi line-height
    const maxHeight = 3 * lineHeight;

    return (
        <Navbar>
            <div className="mx-2 mt-2 py-2 bg-white rounded-md shadow">
                {/* Ini sesi hero */}
                <section
                    id="hero-section"
                    className="py-2 px-5 md:px-10 lg:px-20 md:py-8"
                >
                    <div className="flex justify-between items-center">
                        <div className="flex flex-wrap text-slate-950 items-center space-x-2">
                            <span className="p-[4px] rounded-full bg-slate-400"></span>
                            <h1 className="font-medium text-sm md:text-base lg:text-lg">
                                Web Developer
                            </h1>
                        </div>
                        <div className="flex flex-wrap py-[2px] px-2 bg-green-200 rounded-full text-green-700 items-center space-x-1">
                            <span className="p-[2px] rounded-full bg-green-700"></span>
                            <h1 className="font-medium text-[12px] md:text-sm">
                                Avaliable For Work
                            </h1>
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-center my-8 md:flex-row-reverse md:items-center">
                        <div className="w-full md:w-2/5">
                            <img
                                className="w-40 h-auto bg-slate-400 rounded-full overflow-hidden outline outline-offset-8 outline-slate-300 mx-auto md:w-80"
                                src="/images/me.jpg"
                                alt="Bagas Aditia"
                            />
                            <svg
                                className="absolute bottom-2 right-4 w-12 h-12 animate-bounceY"
                                style={{ animationDelay: "1s" }}
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>PHP</title>
                                <path
                                    d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"
                                    fill="#556096"
                                />
                            </svg>
                            <svg
                                className="absolute bottom-2 right-[26rem] w-10 h-10 animate-bounceY"
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>React</title>
                                <path
                                    d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                                    fill="#58C4DC"
                                />
                            </svg>
                            <svg
                                className="absolute top-4 right-[26rem] w-10 h-10 animate-bounceY"
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>JavaScript</title>
                                <path
                                    d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                                    fill="#F7E025"
                                />
                            </svg>
                            <svg
                                className="absolute top-4 right-8 w-10 h-10 animate-bounceY"
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Laravel</title>
                                <path
                                    d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"
                                    fill="#F9322C"
                                />
                            </svg>
                        </div>
                        <div className="mt-6 text-center md:w-3/5 md:text-left md:mt-0">
                            <h1 className="text-xl font-bold font-sans text-slate-800 md:text-2xl">
                                Halo✌️, saya{" "}
                                <span className="text-3xl block md:text-4xl">
                                    Bagas Aditia
                                </span>
                            </h1>
                            <p className="text-base font-sans text-slate-500 mt-2 md:text-lg md:text-balance md:mt-4">
                                Saya seorang web developer yang berfokus pada
                                pembuatan dan pengembangan website responsif
                                serta aplikasi web yang inovatif dan
                                user-friendly.
                            </p>
                            <div className="flex flex-wrap justify-center mt-6 space-x-2 md:justify-start md:mt-8">
                                <a
                                    href="#"
                                    className="flex flex-wrap bg-black py-2 px-4 rounded-md text-white items-center font-medium shadow"
                                >
                                    <svg
                                        className="mr-2"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12.0369 7.71277C12.4511 7.71277 12.7869 8.04855 12.7869 8.46277V15.6112C12.7869 16.0254 12.4511 16.3612 12.0369 16.3612C11.6227 16.3612 11.2869 16.0254 11.2869 15.6112V8.46277C11.2869 8.04855 11.6227 7.71277 12.0369 7.71277Z"
                                            fill="white"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7.70886 12.037C7.70886 11.6228 8.04465 11.287 8.45886 11.287H15.6147C16.0289 11.287 16.3647 11.6228 16.3647 12.037C16.3647 12.4512 16.0289 12.787 15.6147 12.787H8.45886C8.04465 12.787 7.70886 12.4512 7.70886 12.037Z"
                                            fill="white"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.96051 4.96063C3.66147 6.25968 3.05005 8.42756 3.05005 12.037C3.05005 15.6465 3.66147 17.8143 4.96051 19.1134C6.25956 20.4124 8.42744 21.0239 12.0369 21.0239C15.6463 21.0239 17.8142 20.4124 19.1133 19.1134C20.4123 17.8143 21.0237 15.6465 21.0237 12.037C21.0237 8.42756 20.4123 6.25968 19.1133 4.96063C17.8142 3.66159 15.6463 3.05017 12.0369 3.05017C8.42744 3.05017 6.25956 3.66159 4.96051 4.96063ZM3.89985 3.89997C5.6437 2.15612 8.34424 1.55017 12.0369 1.55017C15.7295 1.55017 18.4301 2.15612 20.1739 3.89997C21.9178 5.64382 22.5237 8.34436 22.5237 12.037C22.5237 15.7297 21.9178 18.4302 20.1739 20.1741C18.4301 21.9179 15.7295 22.5239 12.0369 22.5239C8.34424 22.5239 5.6437 21.9179 3.89985 20.1741C2.156 18.4302 1.55005 15.7297 1.55005 12.037C1.55005 8.34436 2.156 5.64382 3.89985 3.89997Z"
                                            fill="white"
                                        />
                                    </svg>
                                    Hire Me
                                </a>
                                <button className="flex flex-wrap py-2 px-4 rounded-md border border-slate-800 text-slate-800 items-center font-medium shadow">
                                    <svg
                                        className="mr-2"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16.5 4.5V12.5C16.5 14.7091 14.7091 16.5 12.5 16.5H4.5C2.29086 16.5 0.5 14.7091 0.5 12.5V4.5C0.5 2.29086 2.29086 0.5 4.5 0.5H12.5C14.7091 0.5 16.5 2.29086 16.5 4.5ZM2 4.5V12.5C2 13.163 2.26339 13.7989 2.73223 14.2678C3.20107 14.7366 3.83696 15 4.5 15H12.5C13.8807 15 15 13.8807 15 12.5V4.5C15 3.11929 13.8807 2 12.5 2H4.5C3.11929 2 2 3.11929 2 4.5Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M19.5 6.75C19.088 6.75539 18.7554 7.08804 18.75 7.5V15.5C18.7445 17.2926 17.2926 18.7445 15.5 18.75H7.5C7.08579 18.75 6.75 19.0858 6.75 19.5C6.75 19.9142 7.08579 20.25 7.5 20.25H15.5C18.1234 20.25 20.25 18.1234 20.25 15.5V7.5C20.2446 7.08804 19.912 6.75539 19.5 6.75Z"
                                            fill="black"
                                        />
                                    </svg>
                                    Copy Email
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ini Sesi Project */}
                <section
                    id="project-section"
                    className="m-3 bg-main rounded-md"
                >
                    <div className="py-4 px-5 md:px-10 lg:px-20 md:py-10">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-wrap text-slate-950 items-center space-x-2">
                                <span className="p-[4px] rounded-full bg-slate-400"></span>
                                <h1 className="font-medium text-sm md:text-base lg:text-lg">
                                    Project
                                </h1>
                            </div>
                            <a
                                href="#"
                                className="flex flex-wrap px-4 py-2 text-slate-950 items-center space-x-2 rounded-md bg-white shadow"
                            >
                                <h1 className="font-medium text-sm">
                                    View All
                                </h1>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20.05 11.47L13.05 4.47C12.8571 4.28243 12.5787 4.21204 12.3198 4.28533C12.0609 4.35863 11.8608 4.56447 11.7948 4.82533C11.7289 5.08619 11.8071 5.36243 12 5.55L17.71 11.25H4.47998C4.06577 11.25 3.72998 11.5858 3.72998 12C3.72998 12.4142 4.06577 12.75 4.47998 12.75H17.7L12 18.45C11.857 18.5893 11.7764 18.7804 11.7764 18.98C11.7764 19.1796 11.857 19.3707 12 19.51C12.1378 19.6546 12.3302 19.7345 12.53 19.73C12.729 19.7309 12.9201 19.6516 13.06 19.51L20.06 12.51C20.3524 12.2172 20.3524 11.7428 20.06 11.45L20.05 11.47Z"
                                        fill="black"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="flex flex-col space-y-2 mt-8 md:grid md:grid-cols-4 lg:grid-cols-3 md:gap-4 md:space-y-0">
                            <div className="flex justify-between bg-white rounded-md py-4 px-4 shadow-sm md:col-start-1 md:col-span-2 lg:col-span-1">
                                <div className="flex flex-row items-center md:block space-x-2 md:space-x-0">
                                    <div className="flex md:justify-end">
                                        <img
                                            src="/images/logo-typing-test.png"
                                            alt="Logo Typing Test"
                                            className="w-10 md:absolute md:p-2 md:bg-white md:rounded md:m-2"
                                        />
                                    </div>
                                    <img
                                        className="hidden w-full overflow-hidden rounded-md md:block"
                                        src="/images/typing-test.png"
                                        alt=""
                                    />
                                    <div className="justify-start text-start md:mt-4">
                                        <a
                                            href="#"
                                            className="font-semibold text-base"
                                        >
                                            Typing Test
                                        </a>
                                        <p className="text-sm text-slate-600 font-medium md:hidden">
                                            Ini keterangan Aplikasi
                                        </p>
                                        <p
                                            className="hidden text-sm text-slate-600 font-medium md:inline-block md:mt-2 md:line-clamp-3"
                                            style={{
                                                maxHeight: `${maxHeight}px`,
                                                lineHeight: "1.25rem",
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </p>
                                    </div>
                                    <div className="hidden md:flex justify-start mt-2">
                                        <a
                                            href="#"
                                            className="py-2 px-4 bg-black text-white text-xs rounded-md"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <svg
                                    className="md:hidden"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.99983 20.7501C8.19889 20.751 8.38994 20.6717 8.52983 20.5301L16.5298 12.5301C16.8223 12.2373 16.8223 11.7629 16.5298 11.4701L8.52983 3.47009C8.23432 3.19473 7.77382 3.20286 7.48821 3.48847C7.20259 3.77408 7.19447 4.23458 7.46983 4.53009L14.9398 12.0001L7.46983 19.4701C7.17737 19.7629 7.17737 20.2373 7.46983 20.5301C7.60971 20.6717 7.80076 20.751 7.99983 20.7501Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <div className="flex justify-between bg-white rounded-md py-4 px-4 shadow-sm md:col-start-3 md:col-span-2 lg:col-span-1">
                                <div className="flex flex-row items-center md:block space-x-2 md:space-x-0">
                                    <div className="flex md:justify-end">
                                        <img
                                            src="/images/logo-typing-test.png"
                                            alt="Logo Typing Test"
                                            className="w-10 md:absolute md:p-2 md:bg-white md:rounded md:m-2"
                                        />
                                    </div>
                                    <img
                                        className="hidden w-full overflow-hidden rounded-md md:block"
                                        src="/images/typing-test.png"
                                        alt=""
                                    />
                                    <div className="justify-start text-start md:mt-4">
                                        <a
                                            href="#"
                                            className="font-semibold text-base"
                                        >
                                            Typing Test
                                        </a>
                                        <p className="text-sm text-slate-600 font-medium md:hidden">
                                            Ini keterangan Aplikasi
                                        </p>
                                        <p
                                            className="hidden text-sm text-slate-600 font-medium md:inline-block md:mt-2 md:line-clamp-3"
                                            style={{
                                                maxHeight: `${maxHeight}px`,
                                                lineHeight: "1.25rem",
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </p>
                                    </div>
                                    <div className="hidden md:flex justify-start mt-2">
                                        <a
                                            href="#"
                                            className="py-2 px-4 bg-black text-white text-xs rounded-md"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <svg
                                    className="md:hidden"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.99983 20.7501C8.19889 20.751 8.38994 20.6717 8.52983 20.5301L16.5298 12.5301C16.8223 12.2373 16.8223 11.7629 16.5298 11.4701L8.52983 3.47009C8.23432 3.19473 7.77382 3.20286 7.48821 3.48847C7.20259 3.77408 7.19447 4.23458 7.46983 4.53009L14.9398 12.0001L7.46983 19.4701C7.17737 19.7629 7.17737 20.2373 7.46983 20.5301C7.60971 20.6717 7.80076 20.751 7.99983 20.7501Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <div className="flex justify-between bg-white rounded-md py-4 px-4 shadow-sm md:col-start-2 md:col-span-2 lg:col-span-1">
                                <div className="flex flex-row items-center md:block space-x-2 md:space-x-0">
                                    <div className="flex md:justify-end">
                                        <img
                                            src="/images/logo-typing-test.png"
                                            alt="Logo Typing Test"
                                            className="w-10 md:absolute md:p-2 md:bg-white md:rounded md:m-2"
                                        />
                                    </div>
                                    <img
                                        className="hidden w-full overflow-hidden rounded-md md:block"
                                        src="/images/typing-test.png"
                                        alt=""
                                    />
                                    <div className="justify-start text-start md:mt-4">
                                        <a
                                            href="#"
                                            className="font-semibold text-base"
                                        >
                                            Typing Test
                                        </a>
                                        <p className="text-sm text-slate-600 font-medium md:hidden">
                                            Ini keterangan Aplikasi
                                        </p>
                                        <p
                                            className="hidden text-sm text-slate-600 font-medium md:inline-block md:mt-2 md:line-clamp-3"
                                            style={{
                                                maxHeight: `${maxHeight}px`,
                                                lineHeight: "1.25rem",
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </p>
                                    </div>
                                    <div className="hidden md:flex justify-start mt-2">
                                        <a
                                            href="#"
                                            className="py-2 px-4 bg-black text-white text-xs rounded-md"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <svg
                                    className="md:hidden"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.99983 20.7501C8.19889 20.751 8.38994 20.6717 8.52983 20.5301L16.5298 12.5301C16.8223 12.2373 16.8223 11.7629 16.5298 11.4701L8.52983 3.47009C8.23432 3.19473 7.77382 3.20286 7.48821 3.48847C7.20259 3.77408 7.19447 4.23458 7.46983 4.53009L14.9398 12.0001L7.46983 19.4701C7.17737 19.7629 7.17737 20.2373 7.46983 20.5301C7.60971 20.6717 7.80076 20.751 7.99983 20.7501Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Navbar>
    );
}
