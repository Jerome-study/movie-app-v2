import { Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
export const ProfileSkeleton = () => {
    return(
        <>
            <section style={{ minHeight: "90vh"}}>
                <div className=" h-100">
                    <div>
                        <div>
                            <div className="card rounded-0">
                                <div className="row g-0" style={{ minHeight: "92vh"}}>
                                    <div className="col-md-4 py-5 gradient-custom d-flex justify-content-center align-items-center">
                                        <div className="text-center mt-4">
                                            <div>
                                                <Spinner animation="grow" variant="danger" size="sm" />
                                                <p className="text-muted">Getting your avatar, just a moment!</p>
                                            </div>
                                            <div className="mt-5 pt-5">
                                                <div className="placeholder-glow">
                                                    <h1 className="text-muted col-6 col-md-12 placeholder"></h1>
                                                </div>
                                                <div className="placeholder-glow">
                                                    <p className="text-muted col-6 col-md-8 placeholder"></p>
                                                </div>
                                            </div>
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
                                                    <p className="placeholder-glow">
                                                        <span className="text-muted col-6 placeholder"></span>
                                                    </p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Username</h6>
                                                    <p className="placeholder-glow">
                                                        <span className="text-muted col-6 placeholder"></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <h6>Collection</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Liked</h6>
                                                    <p className="placeholder-glow">
                                                        <span className="text-muted col-1 placeholder"></span>
                                                    </p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Watch List</h6>
                                                    <p className="placeholder-glow">
                                                        <span className="text-muted col-1 placeholder"></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <h6>Bio</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-12 mb-3">
                                                <p className="placeholder-glow">
                                                        <span className="text-muted col-12 placeholder"></span>
                                                </p>
                                                <p className="placeholder-glow">
                                                        <span className="text-muted col-12 placeholder"></span>
                                                </p>
                                                <p className="placeholder-glow">
                                                        <span className="text-muted col-12 placeholder"></span>
                                                </p>
                                                <p className="placeholder-glow">
                                                        <span className="text-muted col-12 placeholder"></span>
                                                </p>
                                        
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