import { Outlet } from "react-router-dom";

export const Layout = () => {
    return(
        <main className="pb-5" style={{ backgroundColor: "#f2f2f2", minHeight: "90vh"}} >
                <Outlet />
        </main>
    )
}