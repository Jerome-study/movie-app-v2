import { Routes, Route } from "react-router-dom";
import { Navigationbar } from "./components/Navigationbar";
import { Layout } from "./Layout";
import { HomePage } from "./page/home";
import { SearchPage } from "./page/search";
import { ViewPage } from "./page/view";

import "./App.css"
function App() {
    return(
        <>
            <Navigationbar />
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search/:category" element={<SearchPage />} />
                    <Route path="*" element={<h1>Page not found</h1>}/>
                    <Route path="/view">
                        <Route path=":category/:id" element={<ViewPage />}/>
                    </Route>
                </Route>
            </Routes>
        </>
    )
 
}

export default App
