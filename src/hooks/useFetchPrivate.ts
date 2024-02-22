import axios from "axios";
import { useEffect, useState } from "react";


export const useFetchPrivate = (url: string) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        setLoading(true);
        let timer: any;
        const getData = async () => {
            try {
                const response = await axios.get(url + import.meta.env.VITE_API_KEY);
                setData(response.data);
                timer = setTimeout(() => {
                    setLoading(false);
                }, 2000)
                
                
            } catch(error) {
                setError(error);
                setLoading(false)
            }
        }
        getData();
        return () => {
            setLoading(true);
            clearTimeout(timer)
        }

    }, [url]);
    return { data, loading, error }
}