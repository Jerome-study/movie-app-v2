import { Container } from "react-bootstrap"
import { CastComponent } from "./cast";
import { DetailsComponent } from "./details";
import { SimilarComponent } from "./similar";
import { ButtonComponent } from "./button";
import { DetailsContext } from "../main";
import { useContext } from "react";
import { useFetchBackend } from "../../../hooks/useFetch";
import { FetchUserProps } from "../../../definitions/models";
import { LikeAndComment } from "./interact";
import { Spinner } from "react-bootstrap";

export const ShowDesign = () => {
    const { data, category } = useContext(DetailsContext);
    const { data: isLoggedIn, loading}: FetchUserProps = useFetchBackend(import.meta.env.VITE_API_GETUSER);

    const styles = {
        backgroundImage :`linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(13,9,7)), 
        linear-gradient(to top, rgba(0,0,0,0) 50%, rgba(0,0,0,1)),
        url(${import.meta.env.VITE_IMG_URL_POSTER + data?.backdrop_path})`,
        backgroundRepeat: "no-repeat"
    }

    if (loading) {
        return <div className="text-center mt-5" style={{ minHeight: "90vh"}}>
            <Spinner />
        <p>almost there</p>
    </div>
    }

    return(
        <>  
            <div className="poster-bg text-white " style={data?.backdrop_path? styles : {}} >
                <Container className="py-5 text-overlays d-flex justify-content-center align-items-end" >
                    <div className="text-center" >
                        <h1 className="fs-1">{data?.title || data?.name}</h1>
                        <p className="fs-6">"{data?.tagline}"</p>
                    </div>
                </Container>
            </div>
            <div className="py-5 border-top-0" style={{ backgroundColor: "#0D0907", color: "#f4f3f2", minHeight: "100vh"}}>
                <Container className="info-tv">
                    <div className="row">
                        <div className="col-12 col-lg-7 mb-3">
                            <DetailsComponent data={data} category={category} />
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <ButtonComponent data={data} isLoggedIn={isLoggedIn}/>
                                </div>
                                
                                <div className="d-flex gap-1 align-items-center">
                                    <LikeAndComment movie={data} isLoggedIn={isLoggedIn} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <CastComponent cast={data?.cast}  />
                        </div>
                    </div>
                    <div className="py-4">
                        <h3>More like "{data?.title || data?.name}"</h3>
                        <SimilarComponent similar={data?.similar} />
                    </div>
                </Container>
            </div>

        </>
    )
}


