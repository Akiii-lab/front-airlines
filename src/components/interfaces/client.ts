export interface Cliente {
    id_cliente: number;
    nombres:    string;
    apellidos:  string;
    dni:        number;
    telefono:   number;
    correo:     string;
    direccion:  string;
    role:       string;
    password:   string;
    reservas:   Reservas;
}

export interface Reservas {
    id_reserva : number;
}
