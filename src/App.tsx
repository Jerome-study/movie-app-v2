import { Routes, Route } from "react-router-dom";
import { Navigationbar } from "./components/Navigationbar";
import { Footer } from "./components/Footer";
import { Layout } from "./Layout";
import { HomePage } from "./page/home";
import { SearchPage } from "./page/search";
import { ViewPage } from "./page/view";
import { AboutPage } from "./page/about";

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
                </Route>
                <Route path="/view">
                        <Route path=":category/:id" element={<ViewPage />}/>
                    </Route>
                <Route path="/about" element={<AboutPage />}/>
            </Routes>
            <Footer />
        </>
    )
 
}

export default App
