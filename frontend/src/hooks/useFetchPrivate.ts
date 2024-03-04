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
                    timer = setTimeout(() => {
                        setLoading(false);
                    }, 1000)
                }
            } catch(error) {
                setError(error);
                setLoading(false)
            }
        }
        getData();
        return () => {
            running = false
            clearTimeout(timer)
        }

    }, [url]);
    return { data, loading, error }
}