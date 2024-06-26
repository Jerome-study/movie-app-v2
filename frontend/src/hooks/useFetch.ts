import { useEffect, useState } from "react";
import { instance } from "../utils/utils";



export const useFetchBackend = (url: string) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any | null>();
    const [error, setError] = useState<any>()

    useEffect(() => {
        let running = true;
        const getData = async () => {
            try {
                const response = await instance.get(url);
                if (running) {
                    setData(response.data);
                    setLoading(false)
                }   
            } catch(error) {
                setError(error);
                setLoading(false)
            }
        }
        getData();
        return () => {
            setLoading(true);
        }

    }, [url]);

    const refetch = () => {
        setError(undefined)
        setLoading(true)
        const getData = async () => {
            try {
                const response = await instance.get(url);
                setData(response.data);
                setLoading(false)
                
            } catch(error) {
                setError(error);
                setLoading(false)
            }
        }
        getData();
    }

    return { data, loading, error, refetch }
}