import './login.css'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import {useStoreToken} from '@/lib/token';
import { useStoreLogin } from '@/lib/token';
export function Login() {

        const URL = "http://localhost:8080/api/v1/auth/cliente/login";

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const {token, setToken} = useStoreToken();
        const {setLogin} = useStoreLogin();
        const fectLogin = async () => {
            const res = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Asegúrate de incluir este encabezado
                },
                body: JSON.stringify({
                    correo: email,
                    password: password
                })
            });
            if (!res.ok) {
                console.error("Error al obtener el usuario:", res.status);
                return;
            }
            try {
                const data = await res.json();
                console.log("Usuario recibido", data);
                setToken(data.token);
                setLogin(true);
            }catch (error) {
                console.error("Error al procesar la respuesta JSON:", error);
            }
        }

        const navigate = useNavigate();

        const toRegis = () => {
            navigate("/register");
        }

        const toHome = () => {
            navigate("/");
        }

        const loginApi = () => {
            fectLogin();
            if(token != ""){
                return(
                    <div>
                        <span className='text-black'>
                            Credenciales invalidas
                        </span>
                    </div>
                );
            }
            toHome();
        }

        return (
            <div className='min-h-screen min-w-max bg-center bg-cover m-0 p-0' style={{
                backgroundImage: "url(src/assets/pexels-njeromin-13392086.jpg)"
            }}>
                <div className="flex items-center justify-center h-screen w-screen">
                    <div className="w-96 flex flex-col justify-between h-[60%] bg-transparent backdrop-blur-lg bg-opacity-80 border border-[rgb(212,198,198)] rounded-lg p-6">
                        {/* Título */}
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-orange-600 cursor-pointer" onClick={toHome}>
                                AIRLINES
                            </h1>
                        </div>

                        {/* Formulario */}
                        <div className="flex flex-col space-y-4">
                            {/* Usuario */}
                            <div className="flex flex-col">
                                <label htmlFor="Usuario" className="font-bold text-orange-600 mb-1">
                                    Usuario
                                </label>
                                <Input
                                    id="Usuario"
                                    className="h-10 px-3"
                                    placeholder="Ingrese su usuario"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {/* Contraseña */}
                            <div className="flex flex-col">
                                <div>
                                    <label htmlFor="Password" className="font-bold text-orange-600 mb-1">
                                        Contraseña
                                    </label>
                                    <Input
                                        id="Password"
                                        className="h-10 px-3"
                                        placeholder="Ingrese su contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="text-right mt-2 text-sm">
                                    <span className="text-orange-700 underline cursor-pointer">
                                        Olvidaste la contraseña?
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Botón */}
                        <div className="text-center">
                            <Button className="mt-4 bg-orange-600 text-white hover:bg-orange-700 transition-all" size="lg"
                                onClick={loginApi}
                            >
                                Ingresar
                            </Button>
                        </div>
                        <div className="text-right mt-2 text-sm">
                            <span className="text-orange-500">
                                No tienes cuenta aún?
                            </span>
                            <span className=' text-orange-700 underline cursor-pointer' onClick={toRegis}>
                                Crea una ahora
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

