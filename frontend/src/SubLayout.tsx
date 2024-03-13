import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const SubLayout = () => {
    return(
        <main className="py-5" style={{ backgroundColor: "#f2f2f2", minHeight: "90vh"}} >
            <Container>
                <Outlet />
            </Container>
        </main>
    )
}