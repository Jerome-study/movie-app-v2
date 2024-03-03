import { Spinner, Button } from "react-bootstrap";
import { FetchUserProps } from "../../../definitions/models";
import { useFetchBackend } from "../../../hooks/useFetch"
import { useForm, SubmitHandler } from "react-hook-form"
import { EditProps } from "../../../definitions/models";
import { useNavigate } from "react-router-dom";
import { instance } from "../../../utils/utils";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const EditPageComponent = () => {
    const { data, loading, error }: FetchUserProps = useFetchBackend(import.meta.env.VITE_API_GETALL);
    const navigate = useNavigate();
    const [userError, setUserError] = useState<string>("")
    const { register, handleSubmit } = useForm<EditProps>({
        defaultValues: async () => data
    });

    const notify = () => {
        if (userError) {
            toast.error(userError, {
                toastId: 1
            })
        }
    }

    const onSubmit: SubmitHandler<EditProps> = async (editData) => {
        try {
            if ( data?.first_name === editData.first_name && data?.last_name === editData.last_name && data?.username === editData.username && data?.nickname === editData.nickname && data?.bio === editData.bio) {
                return navigate("/profile")
            }
            const response = await instance.post(import.meta.env.VITE_API_EDITINFO, {
                ...editData
            });

            navigate("/profile", { state: {
                message: response?.data.message
            }});
        } catch(error: any) {
            setUserError(error?.response?.data.error || error?.response?.data.message)
            notify();
        }
    }

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <h1>Something Went Wrong</h1>
    }

    

    return(
        <>
            <section className="position-relative" style={{ minHeight: "90vh"}}>
            <ToastContainer className="position-absolute" style={{ top: "0"}} />
                <div className="card position-relative">
                    <div className="row g-0" style={{ minHeight: "90vh"}}>
                        <div className="col-md-4 py-4 gradient-custom d-flex justify-content-center text-center align-items-center">
                            <div>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="Avatar" className="img-fluid mb-4" style={{ width:"75%", maxWidth: "300px"}}  />
                            </div>
                        </div>
                        <div className="col-md-8 py-4 px-3">
                            <h4 className="text-center">Edit Profile</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group mb-3">
                                    <label htmlFor="username" className="mb-2 fw-bold">Username</label>
                                    <input type="text" defaultValue={data?.username} className="form-control"
                                    {...register("username", {
                                        required: "Username field is required!",
                                        minLength: {
                                            value: 6,
                                            message: "Atleast 6 characters"
                                        }
                                    })}
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="first_name" className="mb-2 fw-bold">First Name</label>
                                    <input type="text" defaultValue={data?.first_name} className="form-control"
                                    {...register("first_name", {
                                        required: "First Name field is required!"
                                    })} 
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="last_name" className="mb-2 fw-bold">Last Name</label>
                                    <input type="text" defaultValue={data?.last_name} className="form-control"
                                    {...register("last_name", {
                                        required: "Last Name field is required!"
                                    })}
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="nickname" className="mb-2 fw-bold">Nickname</label>
                                    <input type="text" defaultValue={data?.nickname} 
                                    placeholder = {!data?.nickname? "You don't have a nickname!": ""}
                                    className="form-control"
                                    {...register("nickname")}
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="bio" className="mb-2 fw-bold">Bio</label>
                                    <textarea defaultValue={data?.bio} style={{resize: "none"}} {...register("bio")} className="form-control" id="exampleFormControlTextarea1" rows={5} placeholder={!data?.bio? "You must  be boring, add a bio!": "" }>

                                    </textarea>
                                </div>
                                <div>
                                    <Button type="submit" className="me-4" variant="outline-success">Update</Button>
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