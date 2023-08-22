"use client"
import { useState } from "react"
import axios from "axios"
import { ApiUrl } from "@/services/apirest"
import { signIn, useSession } from 'next-auth/react'
import FONDO from "../../../public/assets/FONDO.jpg"
import SMALL_LOGO from "public/assets/logoPulzo.png"
import FOOTER_IMG from "public/assets/LogoFooter.png"
import Image from 'next/image'
import "@/app/login/login.css"
import { redirect } from "next/dist/server/api-utils"

function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = async e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmint = e => {
    e.preventDefault();
    redirectTo= "/"
  }

  const handleButtom = e => {
    let url = ApiUrl 
    axios.post(url, user)
      .then(response => {
        console.log("RESPONSE : ", response)
        console.log("TOKEN", response.data.token)
      })
    
    console.log("Enviado.....")
  }

    return (
      <div className="principal-content">
        <div className="container-fondo">
          <Image
            className="img-fondo"
            src={FONDO}
            priority={true}
            alt="img-fondo" />
        </div>
        <div className="small-logo">
          <Image
            className="img-small-logo"
            src={SMALL_LOGO}            
            priority={true}
            alt="small-logo" />
        </div>
        <div className="logo">
          <Image
            className="img-logo"
            src={SMALL_LOGO}
            priority={true}
            alt="big-logo" />
        </div>
        <div className="container-login">
          <h2>Iniciar Sesión</h2>
          <p>¡Hola! Inicia para administrar tus artículos</p>
          <form onSubmit={handleSubmint}>
            <div className="container-mail">
              <label
                htmlFor="email">Correo electrónico Pulzo</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Correo electronico"
                onChange={handleChange}
              />
            </div>
            <div className="container-passw">
              <label htmlFor="passw">Contraseña</label>
              <input
                type="password"
                name="password"
                id="passw"
                placeholder="Contraseña"                
                onChange={handleChange}
              />
            </div>
            <button className="btn-login" type="button" onClick={handleButtom}>
              Iniciar Sesión
            </button>
          </form>
        </div>
        <div className="footer">
          <Image
            className="img-footer"
            src={FOOTER_IMG}
            priority={true}
            alt="logo-footer" />
        </div>    
      </div>
    );
}

export default LoginPage