import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return(
        <main className="py-5" style={{ backgroundColor: "#f2f2f2", minHeight: "90vh"}} >
            <Container style={{ overflowAnchor: "none"}}>
                <Outlet />
            </Container>
        </main>
    )
}