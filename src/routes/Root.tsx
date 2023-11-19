import { Outlet } from "react-router-dom"
import { Header } from "../features/Header/Header"

const Root = () => (
  <>
    <header>
      <Header />
    </header>
    <main>
      <Outlet />
    </main>
  </>
)

export default Root
