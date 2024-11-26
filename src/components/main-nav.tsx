
import { Button } from "@/components/ui/button"
import { PlaneIcon, Building2Icon, CompassIcon, NewspaperIcon, HeartIcon, MessageSquareIcon, LogOutIcon } from 'lucide-react'
import { FC } from "react"
import { useStoreLogin } from "@/lib/token"
import { useStoreToken } from "@/lib/token"
import { useNavigate } from "react-router-dom"

interface NavItem {
    title: string
    href: string
    icon: React.ReactNode
    onclick?: () => void
}

export const MainNav : FC<{
    setInVuelos: (inVuelos: boolean) => void
    inVuelos: boolean
}> = ({
    setInVuelos,
    inVuelos
}) => {
    const {setLogin} = useStoreLogin();
    const {setToken} = useStoreToken();
    const navigate = useNavigate();
    const handleClickVuelos = () => {
        setInVuelos(!inVuelos);
    };

    const handleClickLogOut = () => {
        setToken("");
        setLogin(false);
        navigate("/");
    }

    const items: NavItem[] = [
        {
            title: "Vuelos",
            href: "/vuelos",
            onclick: handleClickVuelos,
            icon: <PlaneIcon className="w-4 h-4"  color="#000"/>
        },
        {
            title: "Tus Reservas",
            href: "/explore",
            icon: <CompassIcon className="w-4 h-4" color="#000" />
        },
    
        {
            title: "Alojamientos",
            href: "/alojamientos",
            icon: <Building2Icon className="w-4 h-4"  color="#000"/>
        },
        {
            title: "Blog",
            href: "/blog",
            icon: <NewspaperIcon className="w-4 h-4" color="#000" />
        },
        {
            title: "Donaciones",
            href: "/trips",
            icon: <HeartIcon className="w-4 h-4" color="#000" />
        },
        {
            title: "Comentarios",
            href: "/comentarios",
            icon: <MessageSquareIcon className="w-4 h-4" color="#000" />
        },
        {
            title: "Salir",
            href: "/salir",
            onclick: handleClickLogOut,
            icon: <LogOutIcon className="w-4 h-4" color="#000" />
        }
    ]

    return (
        <nav className="flex flex-col space-y-1 text-[#030303]">
            {items.map((item) => (
                <Button
                    key={item.href}
                    variant="ghost"
                    className="justify-start"
                    onClick={item.onclick}
                >
                    {item.icon}
                    {item.title}
                </Button>
            ))}
        </nav>
    )
}

