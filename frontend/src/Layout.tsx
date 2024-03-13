import { Outlet } from "react-router-dom";

export const Layout = () => {
    return(
        <main className="pb-5" style={{ backgroundColor: "#0D0907", minHeight: "90vh"}} >
                <Outlet />
        </main>
    )
}