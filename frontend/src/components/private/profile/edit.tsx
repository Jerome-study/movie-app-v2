import { Spinner, Button } from "react-bootstrap";
import { FetchUserProps } from "../../../definitions/models";
import { useFetchBackend } from "../../../hooks/useFetch"



export const EditPageComponent = () => {
    const { data, loading, error }: FetchUserProps = useFetchBackend(import.meta.env.VITE_API_GETALL);

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <h1>Something Went Wrong</h1>
    }

    return(
        <>
            <section style={{ minHeight: "90vh"}}>
                <div className="card">
                    <div className="row" style={{ minHeight: "90vh"}}>
                        <div className="col-md-4 gradient-custom d-flex justify-content-center text-center align-items-center">
                            <div>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="Avatar" className="img-fluid mb-4" style={{ width:"75%", maxWidth: "300px"}}  />
                            </div>
                        </div>
                        <div className="col-md-8 py-4 px-4">
                            <h4 className="text-center">Edit Profile</h4>
                            <form>
                                <div className="form-group mb-3">
                                    <label htmlFor="username" className="mb-2">Username</label>
                                    <input type="text" defaultValue={data?.username} className="form-control"/>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="first_name" className="mb-2">First Name</label>
                                    <input type="text" defaultValue={data?.first_name} className="form-control"/>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="last_name" className="mb-2">Last Name</label>
                                    <input type="text" defaultValue={data?.last_name} className="form-control"/>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="nickname" className="mb-2">Nickname</label>
                                    <input type="text" defaultValue={data?.nickname} 
                                    placeholder = {!data?.nickname? "You don't have a nickname!": ""}
                                    className="form-control"/>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="bio" className="mb-2">Bio</label>
                                    <input type="text" defaultValue={data?.bio} 
                                    placeholder = {!data?.bio? "Put a bio champ!": ""}
                                    className="form-control"/>
                                </div>
                                <div>
                                    <Button className="me-4" variant="outline-success">Update</Button>
                                    <Button variant="outline-danger">Cancel</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}