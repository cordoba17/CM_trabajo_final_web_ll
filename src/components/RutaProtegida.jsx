import { Navigate } from "react-router-dom"

function RutaProtegida({ proteger }){
   // return () ? : // haga una expresion boolean si es verdad hecamos ?  sino es verdad :
   let tokenLogin = localStorage.getItem("token")
   return tokenLogin ? proteger : <Navigate to={"/"}/>
}

export default RutaProtegida