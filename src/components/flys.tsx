import { useStoreToken } from "@/lib/token";
import { Vuelos } from "./interfaces/vuelos";
import { FC, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { PlaneIcon } from "lucide-react";
import { Button } from "./ui/button";
export const Flys : FC<{
    setInVuelos: (inVuelos: boolean) => void
    inVuelos: boolean
}> = ({
    setInVuelos,
    inVuelos
}) => {
    const URL = "http://localhost:8080/api/v1/vuelo";
    const { token } = useStoreToken();
    const [vuelos , setVuelos] = useState<Vuelos>();
    const fetchVuelos = async () => { 
        const res = await fetch(URL,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        if (!res.ok) {
            console.error("Error al obtener los vuelos:", res.status);
            return;
        }
        try {
            const userResponse = await res.json();

            setVuelos({Vuelos : userResponse.Vuelos});
        } catch (error) {
            console.error("Error al procesar la respuesta JSON:", error);
        }
    }
    console.log(vuelos);

    useEffect(() => {
        fetchVuelos();
    } , [inVuelos]);

    if(!vuelos){
        return <div className="text-black">cargando..</div>
    }

    return(
        <div hidden={!inVuelos} >
            <div className="text-black">
                {vuelos.Vuelos.map((vuelo , index) => (
                    <Card key={index} className="m-4">
                        <CardHeader className="flex flex-row items-center gap-4 justify-between">
                            <div className="flex flex-row items-center gap-4">
                                <PlaneIcon></PlaneIcon>
                                <div className="bg-primary p-2 rounded-full text-primary-foreground">{
                                    "vuelo: " +vuelo.id_vuelo}
                                </div>
                                <CardTitle className="text-black">{vuelo.aerolinea.nombre}</CardTitle>
                            </div>
                            <Button className="bg-orange-600 text-white">Reservar</Button>
                        </CardHeader>
                        <CardContent>
                            <div className="text-black flex flex-row items-center justify-around">
                                <div>
                                    {"Origen: " + vuelo.origen}
                                </div>
                                <div>
                                    {"Destino: " + vuelo.destino}
                                </div>
                                <div>
                                    {"Duracion: " + vuelo.duracion}
                                </div>
                                <div>
                                    {"Fecha: " + vuelo.fecha_salida}
                                </div>
                                <div>
                                    {"Precio: " + vuelo.precio}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}