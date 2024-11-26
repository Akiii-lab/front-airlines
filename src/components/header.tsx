import { Button } from "@/components/ui/button"
import Menuimg from "@/assets/menu.svg"
import { useNavigate } from "react-router-dom"
import { FunctionComponent } from "react";
import { ProfileAvatar } from "./profileavatar";
import { useStoreLogin } from "@/lib/token";

interface HeaderProps {
    setAsideOpen: (open: boolean) => void,
    isAsideOpen: boolean
}

export const Header: FunctionComponent<HeaderProps> = ({
    setAsideOpen,
    isAsideOpen
}) => {
    const {login} = useStoreLogin();
    const navigate = useNavigate();

    const toBackHome = () => {
        navigate("/");
    }

    const toBackLogin = () => {
        navigate("/login");
    }

    return (
        <header className="border-b border-b-gray-700" >
            <div className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-5 cursor-pointer">
                    <img src={Menuimg} alt=""
                        style={{
                            transform: isAsideOpen ? "rotate(90deg)" : "rotate(0deg)"
                        }}
                        className="w-8 [transition:transform_0.15s_ease-in-out]" onClick={() => setAsideOpen(!isAsideOpen)} />
                    <div className="text-2xl font-bold bg text-orange-600" onClick={toBackHome}>AIRLINES</div>
                </div>
                <div className="flex flex-row items-center justify-center">
                    { login ? (
                        <ProfileAvatar></ProfileAvatar>
                    ):(
                        <Button className="bg-orange-600" onClick={toBackLogin}>Ingresar</Button>
                    )
                    }
                </div>
            </div>
        </header>
    )
};