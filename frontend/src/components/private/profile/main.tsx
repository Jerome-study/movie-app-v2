import { useFetchBackend } from "../../../hooks/useFetch"
import { Spinner } from "react-bootstrap";
import { FetchUserProps } from "../../../definitions/models";
import { HeroComponent } from "./hero";
export const MainComponent = () => {

    const { data, loading , error }: FetchUserProps = useFetchBackend(import.meta.env.VITE_API_GETALL);
    console.log(data);
    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <h1>Something Went Wrong</h1>
    }
    return(
        <>
        
        <div style={{ backgroundColor: "#232B2B"}}>
            <HeroComponent  data={data}/>
        </div>

        </>
    )
}