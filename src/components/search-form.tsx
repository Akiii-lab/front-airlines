"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon, ArrowRightLeft } from 'lucide-react'
import { FC, useState } from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { RecentSearch } from "./recent-searches"

export const SearchForm: FC<{
    setRecentSearches: (recentSearches: RecentSearch[]) => void
    recentSearches: RecentSearch[]
}> = ({
    setRecentSearches,
    recentSearches
}) => {
        const [date, setDate] = useState<Date>()
        const [origin, setOrigin] = useState("");
        const [destination, setDestination] = useState("");
        const dialogos : string[] = ["¿Te apetece un viaje?", "Un bonito dia para viajar","¿Listo para partir?","La aventura comienza aquí.",
            "El viaje nos espera.","Es hora de explorar.","¿Qué destino tenemos hoy?","¿Te gusta viajar?","¿Emocionado por el viaje?"
        ];
        const handleSearch = () => {
            if(!date) {
                //mostrar error
                return
            }
            //verificar lo demas
            setRecentSearches([
                ...recentSearches, {
                    id: Math.round(Math.random() * 10039829834),
                    dates: date.toLocaleDateString() || "",
                    route: origin + " - " + destination,
                    title: dialogos[Math.floor(Math.random()*dialogos.length)]
                }
            ])
        }

        return (
            <div className="space-y-4">
                <div className="flex flex-row items-center gap-2  ">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="origin" className="text-black">Origen</Label>
                        <Input
                            id="origin"
                            placeholder="Santa Marta (SMR)"
                            className="h-10"
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                        />
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="mt-[1.375rem]"
                        onClick={() => {
                            const auxiliar = destination;
                            setDestination(origin);
                            setOrigin(auxiliar);
                        }}
                    >
                        <ArrowRightLeft className="h-4 w-4" color="black" />
                    </Button>
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="destination" className="text-black">Destino</Label>
                        <Input
                            id="destination"
                            placeholder="Medellín (MDE)"
                            className="h-10"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className={cn(
                                    "h-10 w-[200px] justify-start text-left font-normal mt-[1.375rem] text-black",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4 text-black" />
                                {date ? format(date, "PPP", { locale: es }) : <span className="text-black">Seleccionar fecha</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                locale={es}
                            />
                        </PopoverContent>
                    </Popover>
                    <Button className="mt-[1.375rem] bg-orange-600" size="lg" onClick={handleSearch}>
                        Buscar
                    </Button>
                </div>
            </div>
        )
    }


