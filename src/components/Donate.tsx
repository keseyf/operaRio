import { useState } from "react";

export default function Donate({ onDonateSuccess,dkt }: { onDonateSuccess?: () => void, dkt:any }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState<null | { ok: boolean; msg: string }>(null);

  const [form, setForm] = useState({
    name: "",
    donate: "",
    message: ""
  });

  const api = import.meta.env.VITE_API_URL;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResponseMsg(null);

    try {
      const res = await fetch(`${api}donate/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          donate: Number(form.donate),
          message: form.message,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Erro ao enviar doação.");

      setResponseMsg({ ok: true, msg: "Doação enviada com sucesso! ❤️" });
      setForm({ name: "", donate: "", message: "" });
      setTimeout(()=>{
        setResponseMsg(null)
      },3000)
      

      // 🔥 CHAMA A FUNÇÃO PARA ATUALIZAR A LISTA DE DOAÇÕES
      if (onDonateSuccess) onDonateSuccess();

    } catch (err: any) {
      setResponseMsg({ ok: false, msg: err.message });
    }

    setLoading(false);
  }
  return (
    <>
      {/* SEÇÃO PRINCIPAL */}
      <div className="bg-accent1-700 text-white p-10 flex flex-col items-center justify-center text-center gap-6 mt-10 shadow-lg">

        <h2 className="text-3xl font-bold">Quer ajudar a transformar vidas?</h2>

        <p className="text-lg max-w-xl">
          Sua contribuição permite que mais jovens e famílias participem de oficinas, cursos e atividades culturais que abrem novos caminhos e oportunidades.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="bg-white text-accent1-700 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
        >
          Fazer Doação
        </button>
      </div>


      {/* MODAL COM BLUR */}
{open && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 animate-fadeIn">

    <div
      className={`
        p-6 rounded-xl shadow-xl w-full max-w-md flex flex-col gap-4 animate-scaleIn relative
        ${dkt ? "bg-neutral-900 text-gray-100" : "bg-white text-neutral-900"}
      `}
    >

      {/* BOTÃO FECHAR */}
      <button
        onClick={() => setOpen(false)}
        className={`
          absolute top-3 right-3 text-xl transition
          ${dkt ? "text-gray-400 hover:text-white" : "text-neutral-600 hover:text-black"}
        `}
      >
        ✕
      </button>

      <h3 className="text-xl font-bold mb-2 text-center">Preencha sua doação</h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          type="text"
          placeholder="Seu nome"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={`
            p-3 border rounded-lg w-full
            ${dkt ? "bg-neutral-800 border-neutral-700 text-white" : "bg-white border-neutral-300 text-black"}
          `}
        />

        <input
          type="number"
          placeholder="Valor da doação (R$)"
          required
          value={form.donate}
          onChange={(e) => setForm({ ...form, donate: e.target.value })}
          className={`
            p-3 border rounded-lg w-full
            ${dkt ? "bg-neutral-800 border-neutral-700 text-white" : "bg-white border-neutral-300 text-black"}
          `}
        />

        <textarea
          placeholder="Mensagem (opcional)"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`
            p-3 border rounded-lg w-full h-24 resize-none
            ${dkt ? "bg-neutral-800 border-neutral-700 text-white" : "bg-white border-neutral-300 text-black"}
          `}
        />

        <button
          type="submit"
          disabled={loading}
          className={`
            font-bold px-6 py-3 rounded-lg transition-colors duration-300 disabled:opacity-50
            ${dkt
              ? "bg-blue-600 text-white hover:bg-blue-500"
              : "bg-accent1-700 text-white hover:bg-accent1-600"
            }
          `}
        >
          {loading ? "Enviando..." : "Enviar Doação"}
        </button>
      </form>

      {/* CARD DE RETORNO */}
      {responseMsg && (
        <div
          className={`p-3 mt-2 rounded-lg text-center font-semibold ${
            responseMsg.ok ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {responseMsg.msg}
        </div>
      )}

    </div>
  </div>
)}
    </>
  );
}
