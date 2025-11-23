import { useEffect } from "react";

interface Donate {
    name: string;
    donate: number;
    message?: string;
    createdAt: string;
}

export default function LastDonates({ dkt, donates }: { dkt: boolean, donates: Donate[] }) {

    useEffect(() => {
        // animação para o título / container
        ScrollReveal().reveal("#donates", {
            duration: 800,
            distance: "40px",
            origin: "bottom",
            reset: false
        });

        // anima cada card com delay incremental
        donates.forEach((_, index) => {
            ScrollReveal().reveal(`#donate-card-${index}`, {
                duration: 900,
                distance: "60px",
                origin: "bottom",
                reset: false,
                delay: index * 150 // delay crescente (150ms por card)
            });
        });
    }, [donates]);

    return (
        <div
            id="donates"
            className={`w-full py-6 ${
                dkt ? "bg-black/80 text-white" : "bg-white text-neutral-900"
            }`}
        >

            <h2 className="text-2xl font-bold mb-6 text-center">Últimas 10 Doações</h2>

            {/* FLEX COM WRAP */}
            <div className="mx-auto flex flex-wrap justify-center gap-4 max-w-4xl">

                {donates.map((item, index) => (
                    <div
                        id={`donate-card-${index}`}
                        key={index}
                        className={`p-4 rounded-lg border shadow-sm
                            w-72 sm:w-80
                            ${dkt ? "border-neutral-700 bg-neutral-800" : "border-neutral-300 bg-neutral-100"}
                        `}
                    >

                        {/* Cabeçalho com posição / nome / valor */}
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-lg">{index + 1}º</span>

                            <span className="font-semibold truncate max-w-[70px]">
                                {item.name.trim()}
                            </span>

                            <span className="font-bold text-green-600">
                                R$ {item.donate}
                            </span>
                        </div>

                        {/* Mensagem */}
                        {item.message && item.message.trim() !== "" && (
                            <p className="text-sm mt-1 opacity-80 break-words">
                                {item.message}
                            </p>
                        )}

                        {/* Data formatada */}
                        <p className="text-xs opacity-60 mt-2">
                            {new Date(item.createdAt).toLocaleString("pt-BR", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                            })}
                        </p>
                    </div>
                ))}

            </div>

        </div>
    );
}
