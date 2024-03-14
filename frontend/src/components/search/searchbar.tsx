import { Form, Button, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FormEvent } from "react";
import { SearchResultComponent } from "./searchResult";
import { SearchProps } from "../../definitions/models";
import axios from "axios";



export const SearchBar = ({ category }: { category: string}) => {
    const [title, setTitle] = useState<any>(null);
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();
    const [noData, setNodata] = useState(false)
    useEffect(() => {
        setData(null);
        setTitle("")
    }, [category]);
    
    const getData = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNodata(false);
        setLoading(true);
        setData(null)
        try {
            const response = await axios.get(`${import.meta.env.VITE_SEARCH_URL}/${category}?query=${title}&api_key=${import.meta.env.VITE_API_KEY}`);
            if (response?.data.results.length === 0) {
                setLoading(false)
                setNodata(true)
                return
            }
            setData(response.data.results);
            setLoading(false)
        } catch(error) {
            setError(error)
            setLoading(false)
        }
    };

    if (error) {
        return <p>Something went wrong, refresh the page</p>
    }

    return(
        <div style={{ minHeight: "92vh"}}>
            <div className="container">
                <h1 className="text-center">Search {category === "person"? "Actor/Actress" : category.charAt(0).toUpperCase() + category.slice(1)}</h1>
                <Form className="d-flex my-3" onSubmit={getData}>
                    <Form.Control
                    type="text"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={!title? "": title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <Button type="submit" variant="warning">Search</Button>
                </Form>
            </div>
            
            {loading && 
                <>
                    <div className="d-flex justify-content-center align-items-md-center" style={{ minHeight: "50vh"}}>
                        <div>
                            <Spinner animation="grow" variant="danger" size="sm" />
                            <Spinner animation="grow" variant="danger" size="sm"/>
                            <Spinner animation="grow" variant="danger" size="sm"/>
                        </div>
                    </div>
                </>
            
            }
            {noData && 
                <div className="mt-5">
                    <p className="text-center text-light">There are no results</p>
                </div>
            }

            {!loading && 
            
                <div className="row mt-5 gx-0">
                    {data?.map((result: SearchProps) => {
                        return(
                            <SearchResultComponent key={result.id} category={category} result={result} />
                        )
                    })}
                </div>
                
            }

        </div>
    )
}