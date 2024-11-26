import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Building, Clock, Shield } from 'lucide-react'

const infoCards = [
    {
        title: "Aeropuertos Más Transitados",
        description: "El Aeropuerto Internacional Hartsfield-Jackson de Atlanta es el aeropuerto más transitado del mundo y recibe más de 100 millones de pasajeros al año.",
        icon: <Building className="h-6 w-6" color="#dd610e"/>
    },
    {
        title: "Seguridad de Vuelo",
        description: "El transporte aéreo es uno de los modos de transporte más seguros, con una tasa de mortalidad de 0,07 muertes por cada mil millones de millas-pasajero.",
        icon: <Shield className="h-6 w-6"color="#dd610e"/>
    },
    {
        title: "Velocidad del Avión",
        description: "Los aviones comerciales suelen volar a velocidades de entre 460 y 575 mph (740 y 930 km/h) a altitudes de 30 000 a 40 000 pies.",
        icon: <Plane className="h-6 w-6" color="#dd610e"/>
    },
    {
        title: "Tiempo",
        description: "Debido a la cantidad de trabajos de final de semestre, los creadores de esta web no durmieron por 2 dias!",
        icon: <Clock className="h-6 w-6" color="#dd610e"/>
    }
]

export function InfoCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {infoCards.map((card, index) => (
                <Card key={index}>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-primary p-2 rounded-full text-primary-foreground">
                            {card.icon}
                        </div>
                        <CardTitle className="text-black">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-black">{card.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

