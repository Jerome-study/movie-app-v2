import "./App.css"
import { Routes, Route } from "react-router-dom";
import { Navigationbar } from "./components/Navigationbar";
import { Footer } from "./components/Footer";
import { Layout } from "./Layout";
import { HomePage } from "./page/home";
import { SearchPage } from "./page/search";
import { ViewPage } from "./page/view";
import { AboutPage } from "./page/about";
import { SignInPage } from "./page/singin";
import { SignUpPage } from "./page/signup";
import { Protected } from "./ProtectedLayout";
import { ProfilePage } from "./page/private/profile";
import { EditProfilePage } from "./page/private/editprofile";
import { ToastContainer } from "react-toastify";

function App() {
    return(
        <>
            <Navigationbar />
            <div className="position-relative">
                <ToastContainer className="position-absolute" style={{ top: "0"}} />
            </div>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search/:category" element={<SearchPage />} />
                    <Route path="*" element={<h1>Page not found</h1>}/>

                    {/* Private Routes */}
                    <Route element={<Protected />}>
                        <Route path="/watch_list" element={<h1>Watch list Page</h1>} />
                        <Route path="/favorites" element={<h1>favorite Page</h1>} />
                    </Route>
                </Route>
                {/* Private Routes without Layout */}
                <Route element={<Protected />}>
                    <Route path="/profile">
                        <Route path="" element={<ProfilePage />} />
                        <Route path="edit" element={<EditProfilePage />} />
                    </Route>
                </Route>
                {/* Private Routes without Layout */}
                <Route path="/view">
                    <Route path=":category/:id" element={<ViewPage />}/>
                </Route>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
