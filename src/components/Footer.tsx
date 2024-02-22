import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

let timer: any;
export const Footer = () => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setLoading(true);
        timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => {
            setLoading(true);
            clearTimeout(timer)
        }

    },[location.pathname])


    return(
        <>
            {!loading 
            &&

            <footer className="py-3" style={{ backgroundColor: "#0d253f"}}>
            <Container>
                <div className="text-center">
                    <div>
                        <h6 className="text-white">All posters, names and API are from </h6>
                        <img className="w-100" style={{ maxWidth: "15rem"}} src="/tmdb-long.svg" />
                        <h6 className="text-white">More info from the <Link to={"/about"}>About Page</Link> </h6>
                    </div>
                </div>
            </Container>
        </footer>
            
        }
        </>
    )
}