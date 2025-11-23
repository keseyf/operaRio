import { useEffect } from "react";
import { BiDownArrowAlt } from "react-icons/bi";

export default function Main() {

    useEffect(() => {
        ScrollReveal().reveal("#main", {
          duration: 1500,
          distance: "100px",
          origin: "bottom",
          reset: false
        });
      }, []); // run once on mount
    return (
        <main id="main" className="relative flex items-center justify-center">
            <img 
                className="w-screen h-[calc(100vh-52px)] object-cover object-center" 
                src="./src/assets/mainPhoto.png" 
                alt="" 
            />
            <div className="absolute flex items-center justify-center flex-col h-full w-full bg-black/80">
                <h1 className="text-center text-white font-bold text-3xl mx-10">"Dando <span className="text-accent1-600">visibilidade</span> a quem cria cultura e precisa de <span className="text-accent1-600">oportunidade</span>"</h1>
                <a className={`bg-accent1-700 hover:bg-accent1-600 duration-200 text-white rounded px-7 mt-20 py-1.5 animate-bounce`} href="#sobre">Conhecer o projeto</a>
                <BiDownArrowAlt className="text-2xl animate-bounce text-white mt-3"/>
            </div>
        </main>
    );
}
