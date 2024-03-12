import { useFetchBackend } from "../../../hooks/useFetch"
import { FetchUserProps } from "../../../definitions/models";
import { HeroComponent } from "./hero";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ProfileSkeleton } from "../../../loading/skeletonProfile";
import 'react-toastify/dist/ReactToastify.css';
import { RefreshButton } from "../../../Refresh";

export const MainComponent = () => {
    const { data, loading , error, refetch }: FetchUserProps = useFetchBackend(import.meta.env.VITE_API_GETALL);
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
        return <ProfileSkeleton />
    }

    if (error) {
        return <>
            <div style={{ minHeight: "90vh"}}>
                <RefreshButton refetch={refetch} />
            </div>
        </>
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