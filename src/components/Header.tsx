import { BiMoon } from "react-icons/bi";
import { FaSun } from "react-icons/fa6";


export default function Header({ dkt, setDarkTheme }: any) {
    return (
        <header id="heder" className={`z-1000 shadow-lg ${dkt ? "bg-black/80!" : "bg-white/85!"} duration-150 backdrop-blur-xl sticky top-0 left-0 flex w-full p-3 justify-between items-center`}>
            <a href="/">
                <img className="w-20 hover:scale-95 duration-150" src={`${dkt ? "./src/assets/operalogo.png" : "./src/assets/operalogo2.png"}`} alt="" />
            </a>
           <nav>
                <ul className="flex items-center gap-5">
                    <li>
                        <a className={`bg-accent1-700 hover:bg-accent1-600 duration-200 text-white rounded px-7 py-1.5`} href="#doacao">Doar</a>
                    </li>
                    <button className={`w-10 py-1.5 items-center justify-center flex duration-150 rounded-full  ${dkt ? "text-white-600 hover:bg-white hover:text-black" : " text-black hover:bg-black hover:text-white"} cursor-pointer focus:outline-0`} onClick={setDarkTheme}>
                        {dkt ?
                            <FaSun stroke="0.1" size={20} /> : <BiMoon size={20} />}
                    </button>
                </ul>
            </nav>
        </header>
    );
}
