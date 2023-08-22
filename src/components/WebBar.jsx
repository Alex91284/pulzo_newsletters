import Image from "next/image"
import LOGO from "../../public/assets/logo_negro.png"
import AvatarButton from "@/components/AvatarButton"

function WebBar() {
  return (
    <div className="container-bar">
        <div className="logo-titulo">
          <div className="logo">
            <Image src={LOGO} alt="logo_2" className="logo-bar" />
          </div>
          <div className="titulo">NEWSLETTER</div>
        </div>
        <div className="saludo-button">
          <div className="saludo">¡Hola de nuevo!</div>
          <AvatarButton/>
        </div>
      </div>
  )
}

export default WebBar