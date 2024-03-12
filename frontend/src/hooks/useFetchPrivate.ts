import axios from "axios";
import { useEffect, useState } from "react";


export const useFetchPrivate = (url: string) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        let running = true
        let timer: any;
        const getData = async () => {
            try {
                const response = await axios.get(url + import.meta.env.VITE_API_KEY);
                if (running) {
                    setData(response.data);
                    setLoading(false);   
                }
            } catch(error) {
                setError(error);
                setLoading(false)
            }
        }
        getData();
        return () => {
            setLoading(true)
            running = false
            clearTimeout(timer)
        }

    }, [url]);

    const refetch = () => {
        setError(undefined)
        setLoading(true)
        const getData = async () => {
            try {
                const response = await axios.get(url + import.meta.env.VITE_API_KEY);
                setData(response.data);
                setLoading(false);   
            } catch(error) {
                setError(error);
                setLoading(false)
            }
        }
        getData();
    }


    return { data, loading, error, refetch }
}