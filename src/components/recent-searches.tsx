
import { Card, CardContent } from "@/components/ui/card"
import { BellIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FC } from "react"

export interface RecentSearch {
    id: number
    title: string
    route: string
    dates: string
}


export const RecentSearches: FC<{ recentSearches: RecentSearch[] }> = ({
    recentSearches
}) => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-black">Búsquedas recientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recentSearches.length === 0 && <p className="text-black [grid-column:1/20] text-center">No tienes ninguna busqueda reciente.</p>}
                {recentSearches && recentSearches.slice(recentSearches.length >= 3 ? recentSearches.length - 3 : 0, recentSearches.length).map((search) => (
                    <Card key={search.id}>
                        <CardContent className="p-4 flex items-start gap-4 text-black">

                            <div className="space-y-1">
                                <h3 className="font-medium">{search.title}</h3>
                                <p className="text-sm text-muted-foreground">{search.route}</p>
                                <p className="text-sm text-muted-foreground">{search.dates}</p>
                            </div>
                            <Button variant="ghost" size="icon" className="ml-auto">
                                <BellIcon className="h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

