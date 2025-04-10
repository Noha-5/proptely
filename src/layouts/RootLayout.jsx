import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function RootLayout() {
  return (
    <section>
      <Header />
      <section className="flex">
        <aside>
          <Navbar />
        </aside>
        <main className="ps-5 pe-11 w-full overflow-hidden">
          <Outlet />
        </main>
      </section>
    </section>
  )
}
