import { useFetchBackend } from "../../../hooks/useFetch"
import { Spinner } from "react-bootstrap";
import { FetchUserProps } from "../../../definitions/models";
import { HeroComponent } from "./hero";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const MainComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { data, loading , error }: FetchUserProps = useFetchBackend(import.meta.env.VITE_API_GETALL);
    const notify = () => {
        if (location?.state) {
            toast.success(location.state?.message, {
                toastId: 1
            })
        }
        navigate(location.pathname, {})
    }
    useEffect(() => {
        if (location.state?.message) {
            notify();
            navigate(location.pathname, {})
        }
    }, [])

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