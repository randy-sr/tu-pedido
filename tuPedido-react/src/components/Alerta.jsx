

const Alerta = ({children}) => {
  // Retorna un elemento <div> con la clase "alert alert-danger" y muestra los elementos secundarios
  return (
    <div className="alert alert-danger">
        {children}
    </div>
  )
}

export default Alerta