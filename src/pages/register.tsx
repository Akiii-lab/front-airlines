import './login.css'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
export function Register() {

    const navigate = useNavigate();

    const toLogin = () => {
        navigate("/login")
    }

    const toHome = () => {
        navigate("/");
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
                                placeholder="Ingrese su correo"
                            />
                        </div>
                        {/* Contraseña */}
                        <div>
                            <label htmlFor="Password" className="font-bold text-orange-600 mb-1">
                                Contraseña
                            </label>
                            <Input
                                id="Password"
                                className="h-10 px-3"
                                placeholder="Ingrese su contraseña"
                            />
                        </div>
                        <div>
                            <label htmlFor="Password" className="font-bold text-orange-600 mb-1">
                                Repita su contraseña
                            </label>
                            <Input
                                id="Password"
                                className="h-10 px-3"
                                placeholder="Ingrese su contraseña nuevamente"
                            />
                        </div>
                    </div>
                    {/* Botón */}
                    <div className="text-center">
                        <Button className="mt-4 bg-orange-600 text-white hover:bg-orange-700 transition-all" size="lg">
                            Registrar
                        </Button>
                    </div>
                    <div className="text-right mt-2 text-sm">
                        <span className="text-orange-500">
                            Ya tienes una Cuenta?
                        </span>
                        <span className=' text-orange-700 underline cursor-pointer' onClick={toLogin}>
                            Ingresa ahora
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

