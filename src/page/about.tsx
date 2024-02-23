import { MainComponent } from "../components/about/main";
import { Container } from "react-bootstrap";

export const AboutPage = () => {
    return(
        <main className="border border-3 py-5 border-danger" style={{ backgroundColor: "#0d253f", minHeight: "90vh"}}>
            <Container>
                <MainComponent />
            </Container>
        </main>
    )
}