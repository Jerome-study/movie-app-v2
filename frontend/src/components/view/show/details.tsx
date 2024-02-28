import { ShowProps } from "../../../definitions/models"


export const DetailsComponent = ({ data, category }: { data: ShowProps, category: string }) => {
    return(
        <>
            <div style={{ textAlign: "justify"}}>
                        <h3>Overview</h3>
                        <span>{data?.overview}</span>
            </div>
                <div className="mt-3">
                    <h3>Info</h3>
                    {category === "tv" &&
                        <div className="row">
                            <h6 className="col-12 col-sm-6 col-lg-5 col-xl-4">Status: <span>{data?.status}</span></h6>
                            <h6 className="col-12 col-sm-6 col-lg-5 col-xl-4">Number of Seasons: <span >{data?.number_of_seasons}</span></h6>
                            <h6 className="col-12 col-sm-6 col-lg-5 col-xl-4">Number of Episodes: <span >{data?.number_of_episodes}</span></h6>
                            <h6 className="col-12 col-sm-6 col-lg-5 col-xl-4">First Air: <span >{data?.first_air_date}</span></h6>
                            <h6 className="col-12 col-sm-6 col-lg-5 col-xl-4">Last Air: <span>{data?.last_air_date}</span></h6>
                        </div>
                    }
                    {category === "movie" && 
                        <div className="row">
                            <h6 className="col-12 col-sm-3">Status: <span>{data?.status}</span></h6>
                            <h6 className="col-12 col-sm-4">Release Date: <span>{data?.release_date}</span></h6>
                            <h6 className="col-12 col-sm-3">Run Time: <span>{data?.runtime}</span></h6>
                        </div>
                    }
            </div>
        </>
    )
}