import "./App.css"
import { Routes, Route } from "react-router-dom";
import { Navigationbar } from "./components/navigation/Navigationbar";
import { Footer } from "./components/footer/Footer";
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
import { WatchListPage } from "./page/private/watch_list";
import { ErrorPage } from "./Error";
import { SubLayout } from "./SubLayout";
function App() {
    return(
        <>
            <Navigationbar />
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>

                <Route path="/search/:category" element={<SearchPage />} />

                <Route element={<SubLayout />}>
                    <Route path="*" element={<ErrorPage />}/>
                    {/* Private Routes */}
                    <Route element={<Protected />}>
                        <Route path="/watch_list" element={<WatchListPage />} />
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
