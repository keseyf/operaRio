import { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import axios from "axios";
import LastDonates from "../components/LastDonates";

// 🔥 pré-carregador de imagens
function preloadImages(urls: string[]) {
  const promises = urls.map(
    (url) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      })
  );
  return Promise.all(promises);
}

export default function HomePage() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [loading, setLoading] = useState(true);
  const [donates, setDonates] = useState([]);

  async function fetchDonates() {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + "donate/getAll");
      if (response.data) setDonates(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  useEffect(() => {
    async function loadPage() {
      // 🔥 Lista de imagens para pré-carregar
      const images = [
        "/logo.png",
        "/banner.png",
        "/main-bg.jpg",
        "/about-1.png",
        "/footer-bg.png",
      ];

      await preloadImages(images);
      await fetchDonates();
      setLoading(false);
    }

    loadPage();
  }, []);

  function changeTheme() {
    setDarkTheme(!darkTheme);
  }

  if (loading) {
    return (
      <div className={`${darkTheme ? "bg-black/95" : "bg-neutral-50"} w-full h-screen flex items-center justify-center`}>
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-neutral-300 border-t-blue-500"></div>
      </div>
    );
  }

  return (
    <div className={`${darkTheme ? "bg-black/99 text-gray-100" : "bg-neutral-50"}`}>
      <Header dkt={darkTheme} setDarkTheme={changeTheme} />
      <Main />
      <About dkt={darkTheme} />
      <Donate onDonateSuccess={fetchDonates} dkt={darkTheme} />
      <LastDonates dkt={darkTheme} donates={donates} />
      <Footer dkt={darkTheme} />
    </div>
  );
}
