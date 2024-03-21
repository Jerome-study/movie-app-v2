import { UserProps } from "../../../definitions/models"
import { Link } from "react-router-dom"

export const HeroComponent = ({ data }: { data: UserProps}) => {
    return(
        <>
            <section style={{ minHeight: "90vh"}}>
                <div className=" h-100">
                    <div>
                        <div>
                            <div className="card rounded-0">
                                <div className="row g-0" style={{ minHeight: "90vh"}}>
                                    <div className="col-md-4 py-5 gradient-custom d-flex justify-content-center align-items-center text-center text-white ">
                                        <div>
                                            <div>
                                                <img src={data?.avatar}
                                                    alt="Avatar" className="img-fluid mb-4"/>
                                            </div>
                                            <h1>{data?.username}</h1>
                                            <p style={{ fontSize: "15px"}}>
                                                {data?.nickname}
                                                {!data?.nickname &&
                                                    <Link className="text-decoration-none text-muted link-primary"  to={"/profile/edit"}>
                                                        Add Nickname
                                                    </Link>
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <div className="row">
                                                <h6 className="col-6">Information</h6>
                                                <p className="col-6 mb-0">
                                                    <Link className="link-primary text-decoration-none text-danger" to={"/profile/edit"}>
                                                        Edit Profile
                                                    </Link>
                                                </p>
                                            </div>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Full Name</h6>
                                                    <p className="text-muted">{data?.first_name} {data?.last_name} </p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Username</h6>
                                                    <p className="text-muted">{data?.username}</p>
                                                </div>
                                            </div>
                                            <h6>Collection</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Watch List</h6>
                                                    <p className="text-muted">{data?.watch_list.length}</p>
                                                </div>
                                            </div>
                                            <h6>Bio</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-12 mb-3">
                                                    {!data?.bio && 
                                                    
                                                    <p className="text-center" style={{ fontSize: "15px"}}>
                                                        <Link className="link-primary text-decoration-none text-muted" to={"/profile/edit"}>
                                                            You must be boring, add some bio!
                                                        </Link>
                                                    </p>
                                                    }
                                                    {data?.bio && <p className="text-muted" style={{ fontSize: "15px"}}>{data?.bio}</p>}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
