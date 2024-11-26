import { Card, CardContent } from "@/components/ui/card"
import { RocketIcon, ShieldIcon, CalendarIcon, CheckCircleIcon } from 'lucide-react'

const features = [
    {
        icon: <RocketIcon className="h-6 w-6" />,
        title: "Las mejores compañías, los mejores precios",
        description: "Busca tus vuelos en cientos de aerolineas y compara precios."
    },
    {
        icon: <ShieldIcon className="h-6 w-6" />,
        title: "Busca sin preocupaciones",
        description: "Tu búsqueda no afecta los precios mostrados."
    },
    {
        icon: <CalendarIcon className="h-6 w-6" />,
        title: "Reserva de manera flexible",
        description: "Encuentra vuelos con reserva flexible fácilmente."
    },
    {
        icon: <CheckCircleIcon className="h-6 w-6" />,
        title: "Confiable y gratis",
        description: "Somos un servicio totalmente gratuito, sin cargos ocultos."
    }
]

export function Features() {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#030303]">Tus viajes en un solo lugar</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                    <Card key={index}>
                        <CardContent className="p-6 space-y-2">
                            <div className="text-orange-500">
                                {feature.icon}
                            </div>
                            <h3 className="font-medium text-orange-600">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground text-black">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

