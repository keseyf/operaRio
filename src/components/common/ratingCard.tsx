import { useState, useEffect } from "react";
import { BiStar } from "react-icons/bi";
import ScrollReveal from "scrollreveal";

interface RatingCardProps {
  image: string;
  text: string;
  name: string;
  dkt?: boolean; 
}

export default function RatingCard({ image, text, name, dkt}: RatingCardProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal("#ratingCard", {
      duration: 1200,
      distance: "50px",
      origin: "bottom",
      delay: 150,
      reset: false,
    });
  }, []);

  return (
    <div
      id="ratingCard"
      onClick={() => setOpen(!open)}
      className="relative flex flex-col items-center rounded-xl p-6 w-72 cursor-pointer"
    >
      {/* Foto maior */}
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover object-center rounded-full border-4 border-accent1-600 mb-4"
      />

      {/* Nome */}
      <h2 className={`text-center font-semibold ${dkt ? "text-gray-100" : "text--gray-700"} mb-3`}>{name}</h2>

      {/* Estrelas */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <BiStar key={i} className="text-yellow-400" />
        ))}
      </div>

      {/* Depoimento */}
      <div className={`text-center ${dkt ? "text-gray-100" : "text--gray-700"} text-sm`}>
        <p>&quot;{text}&quot;</p>
      </div>
    </div>
  );
}
