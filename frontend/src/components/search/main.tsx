import { SearchBar } from "./searchbar"
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const MainComponent = () => {
    const location = useLocation();
    const urls = ["movie", "person", "tv"];
    const category: string = location.pathname.split("/")[2];

    if (!urls.includes(category)) {
        return <Navigate to={"*"} />
    }

    return(
        <main>
            <SearchBar category={category}/>
        </main>
    )
}