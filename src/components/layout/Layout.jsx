import { Outlet } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"

export default function Layout() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main>
                <Outlet />
            </main>
            <footer className="mt-auto">
                <Footer />
            </footer>
        </div>
    )
}