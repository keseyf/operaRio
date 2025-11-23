export default function Footer({ dkt }: any) {
    return (
        <footer className={`${dkt ? "bg-neutral-950 text-white" : "bg-neutral-50 text-neutral-900"} py-8  border-t ${dkt ? "border-neutral-800" : "border-neutral-200"}`}>
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Logo ou Nome do Projeto */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold">OPERA RIO</h2>
                    <p className="text-sm opacity-70">Valorizando a cultura local e criando novas oportunidades.</p>
                </div>

                {/* Navegação */}
                <nav className="flex gap-6 text-sm">
                    <a href="/" className="hover:opacity-70 transition">Início</a>
                    <a href="/donate" className="hover:opacity-70 transition">Doar</a>
                    <a href="/contact" className="hover:opacity-70 transition">Contato</a>
                </nav>

                {/* Social */}
                <div className="flex gap-4">
                    <a href="#" className="hover:opacity-70 transition">Instagram</a>
                    <a href="#" className="hover:opacity-70 transition">Facebook</a>
                    <a href="#" className="hover:opacity-70 transition">YouTube</a>
                </div>
            </div>

            {/* Linha final */}
            <div className="text-center text-xs opacity-60 mt-6">
                © {new Date().getFullYear()} OPERA RIO — Todos os direitos reservados. <br />
                Este é um **site demonstrativo**; nenhum dos dados apresentados aqui é real.
            </div>
        </footer>
    )
}
