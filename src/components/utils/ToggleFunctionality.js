import { useEffect, useState } from "react";

export const ToggleFunctionality = () => {
    const [theme, setTheme] = useState("light");
    const [mountedComponent, setMountedComponent] = useState(false);

    const themeToggler = () => {
        theme === "light" ? setMode("dark") : setMode("light");
    };

    const setMode = (mode) => {
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    };

    useEffect (() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme ? setTheme(localTheme) : setMode("light");
        setMountedComponent(true);
    }, []);

    return [theme, themeToggler, mountedComponent];
};