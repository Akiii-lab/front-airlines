export interface Vuelos {
    Vuelos: Vuelo[];
}

export interface Vuelo {
    id_vuelo:          number;
    origen:            string;
    destino:           string;
    fecha_salida:      Date;
    hora_salida:       string;
    precio:            number;
    duracion:          string;
    capacidad:         number;
    aerolinea:         Aerolinea;
    aeropuertoSalida:  Aeropuerto | null;
    aeropuertoLlegada: Aeropuerto | null;
    reservas:          any[];
}

export interface Aerolinea {
    id_aerolinea:    number;
    nombre:          string;
    codigo_arolinea: number;
    pais:            string;
}

export interface Aeropuerto {
    id_aeropuerto: number;
    nombre:        string;
    ciudad:        string;
    pais:          string;
    vueloLlegada:  null;
    vueloSalida:   null;
}