import { Navigate, Route, Routes } from "react-router-dom"

import { DcPage, MarvelPage } from "../heroes/pages"
import { LoginPage } from "../auth/pages"
import { Navbar } from "../ui"
import { HeroesRoutes } from "../heroes"

export const AppRouter = () => {
  return (
    <>
      
      <Routes>
          <Route path="login" element={<LoginPage/>}/>
          
          <Route path="/*" element={<HeroesRoutes/>}/>
      
      </Routes>
    </>
  )
}
