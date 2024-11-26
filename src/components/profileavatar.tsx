import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { Cliente } from "./interfaces/client";
import Sherk from '@/assets/images.jpg'
import { useStoreToken } from "@/lib/token";

const URL = "http://localhost:8080/api/v1/cliente/itself"
export function ProfileAvatar() {
    const [actualUser, setActualUser] = useState<Cliente>();
    const {token} = useStoreToken();
    const fetchUser = async() => {
        const res = await fetch(URL,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        if (!res.ok) {
            console.error("Error al obtener el usuario:", res.status);
            return;
        }
        try {
            const userResponse = await res.json();
            setActualUser(userResponse.Cliente);
        } catch (error) {
            console.error("Error al procesar la respuesta JSON:", error);
        }
    }

    useEffect(()=> {
        fetchUser();
    },[]);

    if(!actualUser){
        return <div className="text-black">cargando..</div>
    }

    console.log(actualUser);
    return (
        <div className="flex items-center space-x-4 m-4">
            <div>
                <p className="text-lg font-bold text-black">{actualUser.nombres}</p>
                <p className="text-sm text-gray-500">{actualUser.correo}</p>
            </div>
            <Avatar>
                <AvatarImage src={Sherk} alt="Avatar de usuario" />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
        </div>
    );
}