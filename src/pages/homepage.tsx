import { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import axios from "axios";
import LastDonates from "../components/LastDonates";

export default function HomePage() {
    const [darkTheme, setDarkTheme] = useState(false);
    const [loading, setLoading] = useState(true);
    const [donates, setDonates] = useState([]);

    async function fetchDonates() {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL + "donate/getAll");
            if (response.data) {
                setDonates(response.data);
            }
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchDonates();
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

            {/* 🔥 AGORA ATUALIZA AUTOMATICAMENTE */}
            <Donate onDonateSuccess={fetchDonates} dkt={darkTheme} />

            <LastDonates dkt={darkTheme} donates={donates} />
            <Footer dkt={darkTheme} />
        </div>
    );
}
