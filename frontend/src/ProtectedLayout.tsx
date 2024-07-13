import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { instance } from "./utils/utils";
import { RetrievingLoading } from "./loading/retrieving";
export const Protected = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let running = true;
        const getUser = async () => {
            try {
                const response = await instance.get("/api/isLoggedIn");
                if (running) {
                    if (!response.data) {
                        return navigate("/")
                    }
                    setLoading(false)
                }
            } catch(error) {

            }
        }
        getUser();
        return () => {
            running = false
        }
    }, [])

    if (loading) {
        return <RetrievingLoading />  
    }

    return(
        <>
            <Outlet />
        </>
    )
}

