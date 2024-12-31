import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});

const link = window.location.href;
const bg = document.querySelector("body");

if (link == "http://127.0.0.1:8000/typing-test") {
    bg.classList.remove("bg-main");
    bg.classList.add("bg-slate-950", "font-mono");
} else if (link == "http://127.0.0.1:8000/") {
    bg.classList.remove("bg-slate-950", "font-mono");
    bg.classList.add("bg-main");
}

console.log(window.location.href);
