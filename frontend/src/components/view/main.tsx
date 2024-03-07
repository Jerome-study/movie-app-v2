import { HeroComponent } from "./hero"
import { useLocation, useParams } from "react-router-dom"
import { Navigate } from "react-router-dom";
import { createContext } from "react";
import { Spinner } from "react-bootstrap";
import { useFetchMulti } from "../../hooks/useFetchMulti";
import {Container} from "react-bootstrap";



export const DetailsContext = createContext<any>({});

export const MainComponent = () => {
    const { id } = useParams();
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const categories = ["person", "tv", "movie"]

    if (!categories.includes(category) ) {
        return <Navigate to={"*"} />
    }

    let { data, loading , error } = useFetchMulti(import.meta.env.VITE_API_BASE_URL + `/${category}/` + id + "?api_key=", category, id);
    if (error?.response?.status === 404) {
        return <Navigate to={"*"} />
    }

    if (error) {
        return <h1>Something went Wrong</h1>
    }


    return(
        <main style={{ backgroundColor: "#f2f2f2", minHeight: "90vh"}}>
            <DetailsContext.Provider value={{ data }}>
                {loading && 
                
                <Container className="text-center pt-5">
                    <Spinner />
                    <p>Retreiving Data</p>
                </Container>    
                }
                {!loading && 
                    <>
                        <HeroComponent category={category} />
                    </>
                    
                }
                    
            </DetailsContext.Provider>
        </main>
    )
}