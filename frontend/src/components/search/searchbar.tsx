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

    useEffect(() => {
        setData(null);
        setTitle("")
    }, [category]);
    
    const getData = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await axios.get(`${import.meta.env.VITE_SEARCH_URL}/${category}?query=${title}&api_key=${import.meta.env.VITE_API_KEY}`);
            setData(response.data.results);
            setLoading(false)
        } catch(error) {
            setError(error)
            setLoading(false)
        }
    };

    if (error) {
        return <h1>SOmething Went Wrong</h1>
    }

    return(
        <div style={{ minHeight: "92vh"}}>
            <h1>Search {category === "person"? "Actor/Actress" : category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            <Form className="d-flex my-3" onSubmit={getData}>
                <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={!title? "": title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <Button type="submit" variant="outline-success">Search</Button>
            </Form>
            
            {loading && 
                <>
                    <div className="d-flex justify-content-center align-items-md-center" style={{ minHeight: "50vh"}}>
                        <div>
                            <Spinner animation="grow" variant="dark" />
                            <Spinner animation="grow" variant="dark" />
                            <Spinner animation="grow" variant="dark" />
                        </div>
                    </div>
                </>
            
            }
            {!loading && 
            
                <div className="row gy-4 pt-4">
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