import { Container } from "react-bootstrap"
export const ShowDesign = ({ data }: { data: any}) => {
    const styles = {
        backgroundImage :`linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,1)), 
        linear-gradient(to top, rgba(0,0,0,0) 50%, rgba(0,0,0,1)),
        url(${import.meta.env.VITE_IMG_URL_POSTER + data?.backdrop_path})`,
        backgroundRepeat: "no-repeat"
    }
    return(
        <>
            {/* <div className="card bg-dark text-white rounded-0">
                <img className="card-img rounded-0" src={import.meta.env.VITE_IMG_URL_POSTER + data?.backdrop_path} alt="Card image" /> 
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div> */}
            <div className="poster-bg text-white" style={data?.backdrop_path && styles}>
                <Container>
                    <h4 className="fs-1">{data?.title || data?.name}</h4>
                </Container>
            </div>
            <div style={{ minHeight: "90vh", backgroundColor: "#f2f2f2"}}>
                <h1 className="">Biography</h1>
            </div>

        </>
    )
}