import axios from "axios";
import { useEffect, useState } from "react";


export const useFetchMulti = (url: string) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        setLoading(true);
        let timer: any;
        const getData = async () => {
            try {
                const firstResponse = await axios.get(url + import.meta.env.VITE_API_KEY);
                const finalResponse = await axios.get(`${import.meta.env.VITE_SEARCH_MULTI}?query=${firstResponse.data.name}` + `&api_key=${import.meta.env.VITE_API_KEY}`)
                setData({...finalResponse.data.results[0], ...firstResponse.data});
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