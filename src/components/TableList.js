import { NewslettersProvider } from "@/context/NewslettersContext"
const cargarDatos = () => {
    return fetch('https://stage-cerberos.pulzo.com/cerbero/v2/request?event=newsletters')
        .then(response => response.json())
    
}
      
export default async function TableList({ params:any }) {
    
    const datos = await cargarDatos()
    console.log( datos)

  return (
      <div>
          <div className="container-table">
            <div className="table">
              <div className="table-header">
                <div className="td">Nombre</div>
                <div className="td">Sección</div>
                <div className="td">Estado de Programación</div>
                <div className="td">Acciones</div>
              </div>
              <div className="table-body">
                {/* {
                    datos.map(dato => (
                    <div key={dato.id}>
                        <div className="td">{valor.name}</div>
                        <div className="td">{valor.section}</div>
                        <div className="td">{valor.schedule_status}</div>
                        <div className="td">

                        </div>
                    </div>                    
                ))} */}
              </div>
            </div>
          </div>
      </div>
  )
}

