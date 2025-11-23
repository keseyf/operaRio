export default function NotFound(){
    return(
        <div className="flex flex-col bg-accent1-600 items-center justify-center w-screen h-screen">
            <h1 className="text-white font-bold">Parece que você se perdeu, não encontramos essa página.</h1>
            <a className="underline my-3 font-bold text-white" href="/">Voltar ao início</a>
        </div>
    )
}