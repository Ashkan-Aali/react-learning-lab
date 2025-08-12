import { FiMoon, FiSun } from "react-icons/fi";
import { useDarkmode } from "../hooks/useDarkmode";

const Darkmode = () => {
    const {setDark , setLight } = useDarkmode();
    return (
        <span className="cursor-pointer transform dark:rotate-90 transition-all">
            <FiMoon onClick={setDark} className="dark:hidden "/>
            <FiSun onClick={setLight} className="hidden dark:inline"/>
        </span>
    );
};

export default Darkmode;