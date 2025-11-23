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
            className={`w-full flex items-center justify-center flex-col py-6 ${dkt ? " text-white" : "bg-white text-neutral-900"
                }`}
        >

            <h2 className="text-2xl font-bold mb-6 text-center w-fit px-4 py-1">Últimas 10 Doações</h2>

            {/* FLEX COM WRAP */}
            <div className="mx-auto flex flex-wrap justify-center gap-4 max-w-4xl">

                {donates.length > 0 ? (donates.map((item, index) => (
                    <div
                        id={`donate-card-${index}`}
                        key={index}
                        className={`p-4 rounded-lg border shadow-sm
                            w-92 sm:w-80
                            ${dkt ? "border-neutral-700 bg-neutral-800" : "border-neutral-300 bg-neutral-100"}
                        `}
                    >

                        {/* Cabeçalho com posição / nome / valor */}
                        <div className="flex flex-col justify-between mb-1">
                            <div className="w-full flex flex-row-reverse items-center justify-between">

                            <span className={`font-bold text-sm ${dkt ? "text-neutral-500" : "text-neutral-400"}`}>{index + 1}º</span>

                            <span className="font-semibold text-sm truncate ">
                                {item.name.trim()}
                            </span>
                            </div>
                            <span className={`font-bold my-3 text-sm ${dkt ? "text-neutral-300" : "text-neutral-700"}`}>
                              <span className="text-green-600 ">R${item.donate}</span>
                            </span>
                        </div>

                        {/* Mensagem */}
                        <p className={`text-xs ${dkt ? "text-neutral-400" : "text-neutral-600"} px-1`}>
                                Mensagem:
                            </p>
                        {item.message && item.message.trim() !== "" ? (
                            <p className={`text-sm mt-1 ${dkt ? "text-white" : "text-neutral-900"} opacity-80 break-words p-3 border border-neutral-600/30 rounded`}>
                                {item.message}
                            </p>
                        ): (<p className="text-sm mt-1 opacity-80 break-words p-3 border border-neutral-600/30 rounded">Nenhuma mensagem adicionada pelo doador.</p>)}

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
                ))) : (<div>
                    <h1 className={`${dkt ? "text-neutral-900" : "text-neutral-500"} underline text-sm px-3`}>Nenhuma doação ainda :(</h1>
                </div>)}

            </div>
                    <p className={`${dkt ? "text-neutral-400" : "text-neutral-600"} my-5`}>Acabou Por aqui...</p>
        </div>
    );
}
