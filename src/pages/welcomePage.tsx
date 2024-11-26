import { MainNav } from "@/components/main-nav"
import { SearchForm } from "@/components/search-form"
import { RecentSearch, RecentSearches } from "@/components/recent-searches"
import { Features } from "@/components/features"
import { Header } from "@/components/header"
import { InfoCards } from "@/components/info-cards"
import { useState } from "react"

export function WelcomePage() {
    const [isasideOpen, setIsasideOpen] = useState(false)
    const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);
    const [isLogin , setIsLogin] = useState(true);
    const [inVuelos, setInVuelos] = useState(false);


    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header
                isLogin = {isLogin}
                setIsLogin={setIsLogin}
                isAsideOpen={isasideOpen}
                setAsideOpen={setIsasideOpen}
            />
            <div className="flex flex-1 relative">
                <aside className="w-64 border-r border-r-black p-6 hidden md:block absolute  [transition:left_0.15s_ease-in-out] "
                    style={
                        {
                            left: isasideOpen ? 0 : "-18rem"
                        }
                    }
                >
                    <MainNav 
                        inVuelos = {inVuelos}
                        setInVuelos={setInVuelos}
                    />
                </aside>
                <main className="flex-1 p-6 [transition:margin_0.15s_ease-in-out] "
                    style={{
                        marginLeft: isasideOpen ? "18rem" : 0
                    }}
                >
                    {/* parte derecha de la pagina donde esta todo */}
                    {inVuelos ?
                    (
                        <div>
                            hola
                        </div>
                    )
                    :
                    (
                        <div className="max-w-5xl mx-auto space-y-8">
                            <h1 className="text-2xl font-bold text-[#030303]">
                                Busca tu vuelo deseado
                            </h1>
                            <SearchForm setRecentSearches={setRecentSearches} recentSearches={recentSearches} />
                            <RecentSearches recentSearches={recentSearches} />
                            <Features />
                            <section>
                                <h2 className="text-xl font-semibold mb-4 text-black">Algunos Datos Más</h2>
                                <InfoCards />
                            </section>
                        </div>
                    )
                    }
                    
                </main>
            </div>
        </div>
    )
}