import { Button, Spinner } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const SkeletonEdit = () => {
    const navigate = useNavigate();
    return(
        <section className="position-relative" style={{ minHeight: "90vh"}}>
                <div className="card position-relative">
                    <div className="row g-0" style={{ minHeight: "90vh"}}>
                        <div className="col-md-4 py-4 gradient-custom d-flex justify-content-center text-center align-items-center">
                            <div className="w-100 px-5">
                                <h1 className="text-center text-white">Avatar</h1>
                                <div className="my-5">
                                    <Spinner  size="sm"/>
                                </div>
                                <div>
                                    <select className="form-select pt-3 form-select-lg select-section bg-transparent" aria-label=".form-select-lg example" disabled>
                                        <option>
                                            Avatar 1
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 py-4 px-3">
                            <h4 className="text-center">Edit Profile</h4>
                            <form>
                                <div className="form-group mb-3">
                                    <label htmlFor="username" className="mb-2 fw-bold">Username</label>
                                    <div className="placeholder-glow">
                                        <input type="text"className="form-control placeholder "/>
                                    </div>
                                    
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="first_name" className="mb-2 fw-bold">First Name</label>
                                    <div className="placeholder-glow">
                                        <input type="text"className="form-control placeholder "/>
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="last_name" className="mb-2 fw-bold">Last Name</label>
                                    <div className="placeholder-glow">
                                        <input type="text"className="form-control placeholder "/>
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="nickname" className="mb-2 fw-bold">Nickname</label>
                                    <div className="placeholder-glow">
                                        <input type="text"className="form-control placeholder "/>
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="bio" className="mb-2 fw-bold">Bio</label>
                                    <div className="placeholder-glow">
                                        <textarea className="form-control placeholder" rows={5}>
                                        </textarea>
                                    </div>
                                </div>
                                <div>
                                    <Button type="submit" className="me-4" variant="outline-success" disabled>Update</Button>
                                    <Button variant="outline-danger" onClick={()=> navigate(-1)}>Cancel</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    )
}