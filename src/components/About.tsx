import { useEffect, useState } from "react"
import Card from "./common/card";
import RatingCard from "./common/ratingCard";
import { Accordion } from "./common/accordion";

export default function About({ dkt }: any) {

    useEffect(() => {
        ScrollReveal().reveal("#info", {
            duration: 1500,
            distance: "100px",
            origin: "top",
            reset: false
        });
    }, []); // run once on mount

    const [xWidth, setXWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setXWidth(window.innerWidth);
        }

        // adiciona o listener
        window.addEventListener("resize", handleResize);

        // remove o listener quando o componente desmontar
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // <- array vazio: executa só uma vez
    return (
        <div id="sobre" className="flex px-15 my-15">
            <div id="sinopse" className="">
                <h1 className="text-accent1-600 text-4xl mb-10 font-bold">Visão geral</h1>
                
<div className="space-y-4">
      
      <Accordion dkt={dkt} title="Objetivo Principal">
        Utilizar a tecnologia para valorizar a cultura local e dar mais 
        visibilidade e voz às comunidades, criando oportunidades reais para 
        jovens e responsáveis.
      </Accordion>

      <Accordion dkt={dkt} title="Contexto da Ideia">
        Com base na operação do Rio de Janeiro, evidencia-se o perigo oferecido 
        pelo tráfico organizado. O número de jovens de 13 a 18 anos envolvidos 
        cresce de forma alarmante, muitas vezes por falta de oportunidade, 
        visibilidade ou necessidade. A OPERA RIO surge para apoiar esses jovens 
        e seus responsáveis.
      </Accordion>

      <Accordion dkt={dkt} title="Propósito da OPERA RIO">
        A OPERA RIO — uma ONG formada por professores e voluntários — oferece 
        cursos, oficinas culturais, artesanato, modelagem e outras atividades 
        práticas que incentivam criatividade, habilidades e valorização da 
        cultura local, mostrando que existem caminhos além do tráfico.
      </Accordion>

      <Accordion dkt={dkt} title="Problemas a Resolver">
        Falta de oportunidade e falta de visibilidade para jovens e comunidades.
      </Accordion>

    </div>



                <ul id="info" className="flex items-center justify-center flex-col gap-15 my-20 md:flex-row">
                    <li>
                        <h1 className="text-6xl text-center text-accent1-600 font-black my-3">+130</h1>
                        <p className="text-sm text-center">Famílias ajudadas diretamente pela ONG através de cursos, oficinas e apoio social.</p>
                    </li>
                    <li>
                        <h1 className="text-6xl text-center text-accent1-600 font-black my-3">+500</h1>
                        <p className="text-sm text-center">Jovens beneficiados com aulas de artesanato e atividades culturais, desenvolvendo habilidades práticas.</p>
                    </li>
                    <li>
                        <h1 className="text-6xl text-center text-accent1-600 font-black my-3">+20</h1>
                        <p className="text-sm text-center">Projetos e oficinas realizados em diferentes comunidades para incentivar a cultura local e oferecer alternativas ao tráfico.</p>
                    </li>
                </ul>
                <ul className="flex justify-center items-center gap-10 w-full flex-col lg:flex-row">
                    <li>
                        <Card image={"./src/assets/artesanato.jpg"} text="“Oficinas de artesanato que desenvolvem habilidades e despertam novas possibilidades.”" position="top" />
                    </li>
                    <li>
                        <Card image={"./src/assets/maos.jpg"} text="“Um projeto construído junto com a comunidade, para a comunidade.”" position="top" />
                    </li>
                    <li>
                        <Card image={"./src/assets/voluntario.jpg"} text="“Aulas guiadas por voluntários comprometidos em transformar vidas.”" position="top" />
                    </li>
                </ul>
                <div className="mt-20 flex items-center justify-center flex-col">
                    <h1 className="bg-accent1-700 text-white p-2 text-4xl font-black w-full mb-6">
                        Histórias de Jovens e Mães
                    </h1>
                    <ul className="flex flex-wrap flex-col lg:flex-row gap-6">
                        <li>
                            <RatingCard
                                dkt={dkt}
                                image={"./src/assets/mae1.jpg"}
                                name="Ana Souza, 24 anos"
                                text="Eu conheci a OPERA RIO pelo TikTok, vi um vídeo sobre as oficinas de artesanato e decidi levar meu filho. Ele adorou e agora está super motivado a aprender coisas novas."
                            />
                        </li>
                        <li>
                            <RatingCard
                                dkt={dkt}
                                image={"./src/assets/jovem1.jpg"}
                                name="Carlos Henrique, 16 anos"
                                text="Uma amiga me falou sobre as aulas da ONG. No começo eu pensei que ia ser só mais uma atividade, mas aprendi a fazer esculturas e me senti parte de algo positivo."
                            />
                        </li>
                        <li>
                            <RatingCard
                                dkt={dkt}
                                image={"./src/assets/mae2.jpg"}
                                name="Mariana Lima, 22 anos"
                                text="Descobri a ONG quando procurava algo para ocupar meu tempo e o do meu filho. Hoje participamos das oficinas juntos, e isso mudou completamente nossa rotina."
                            />
                        </li>
                        <li>
                            <RatingCard
                                image={"./src/assets/jovem2.jpg"}
                                name="Lucas Pereira, 17 anos"
                                text="Vi um post da ONG no Instagram e decidi tentar. As aulas são muito mais do que aprender técnicas, é sobre conhecer pessoas e se sentir apoiado."
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}