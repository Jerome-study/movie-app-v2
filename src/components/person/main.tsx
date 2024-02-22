import { HeroComponent } from "./hero"
import { useLocation, useParams } from "react-router-dom"
import { Navigate } from "react-router-dom";
import { createContext } from "react";
import { Spinner } from "react-bootstrap";
import { useFetchMulti } from "../../hooks/useFetchMulti";

export const DetailsContext = createContext<any>({});

export const MainComponent = () => {
    const { id } = useParams();
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const { data, loading , error } = useFetchMulti(import.meta.env.VITE_API_BASE_URL + `/${category}/` + id + "?api_key=")
    if (error?.response.status === 404) {
        return <Navigate to={"*"} />
    }

    if (error) {
        return <h1>Something went Wrong</h1>
    }

    return(
        <main>
            <DetailsContext.Provider value={{ data }}>
                {loading && <Spinner />}
                {!loading && 
                    <>
                        <HeroComponent  />
                    </>
                
                }
                
            </DetailsContext.Provider>
        </main>
    )
}