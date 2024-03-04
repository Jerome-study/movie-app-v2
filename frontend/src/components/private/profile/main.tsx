import { useFetchBackend } from "../../../hooks/useFetch"
import { Spinner } from "react-bootstrap";
import { FetchUserProps } from "../../../definitions/models";
import { HeroComponent } from "./hero";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const MainComponent = () => {
    const { data, loading , error }: FetchUserProps = useFetchBackend(import.meta.env.VITE_API_GETALL);
    const location = useLocation();
    const navigate = useNavigate();

    const notify = async () => {
        if (location.state?.message)
        toast.success(location.state?.message, {
            toastId: 1
        })
    }

    useEffect(() => {
        if (location.state?.message) {
            setTimeout(() => {
                notify();
                navigate(location.pathname, {})
            }, 100)
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
            <div className="position-relative" style={{ backgroundColor: "#232B2B"}}>
            <ToastContainer className="position-absolute" style={{ top: "0"}} />
                <HeroComponent  data={data}/>
            </div>
        </>
    )
}