import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

interface CardProps {
  image: string;
  text: string;
  position: string;
}

export default function Card({ image, text, position }: CardProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal("#card", {
      duration: 1500,
      distance: "100px",
      origin: "bottom",
      reset: false,
    });
  }, []);

  return (
    <div
      id="card"
      onClick={() => setOpen(!open)}
      className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer select-none"
    >
      {/* Imagem */}
      <img
        src={image}
        alt={text}
        className={`w-screen h-64 object-cover object-${position}
        transition-transform duration-500 group-hover:scale-110`}
      />
      <p
  className={`
    absolute bottom-3 left-1/2 -translate-x-1/2 
    text-white text-center text-xs bg-black/90 px-3 py-1 rounded-full 
    opacity-80 backdrop-blur-sm shadow-md
    transition-opacity duration-300
    ${open ? "opacity-0" : "opacity-80 group-hover:opacity-100"}
  `}
>
  clique para mais informações
</p>


      {/* Overlay com Hover + Clique */}
      <div
        className={`
          absolute inset-0 backdrop-blur-2xl bg-black/90 flex items-center justify-center p-4
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        `}
      >
        <p className="text-white text-center text-sm">{text}</p>
      </div>
    </div>
  );
}
