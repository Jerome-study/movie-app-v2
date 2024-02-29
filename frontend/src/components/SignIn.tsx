import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { useForm, SubmitHandler } from "react-hook-form"
import { InputFormProps } from "../definitions/models"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useFetchBackend } from "../hooks/useFetch";

export const SignInComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit,formState: { errors } } = useForm<InputFormProps>();
    const onSubmit: SubmitHandler<InputFormProps> = async (data) => {
        try {
            
        } catch(error) {
            console.log(error)
        }
    }


    const notify = () => {
        toast.dismiss();
        toast.error(errors.username?.message, {
            toastId: 1
        });
        toast.error(errors.password?.message, {
            toastId: 2
        });

        if (location.state) {
            toast.success(location.state?.message, {
                toastId: 3,
            })
        }
    }

    useEffect(() => {
        if (location.state?.message) {
            notify();
            navigate(location.pathname, {})
        }
    }, [])
    


    return(
        <>
            <section className="d-flex position-relative justify-content-center align-items-center px-2" style={{ minHeight: "92vh", backgroundColor: "#f4f3f2"}}>
                <ToastContainer className="position-absolute" style={{ top: "0"}} />
                <div className="bg-light position-relative rounded rounded-3 border border-2 shadow-sm w-100 py-4 p-3" style={{ minHeight: "50vh", maxWidth: "25rem"}}>
                    <h1 className="text-center">SignIn</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating mb-3 mt-3">
                            <input 
                            type="text" 
                            className="form-control" 
                            id="username" 
                            placeholder="Enter username" 
                            {...register("username", {
                                required: "Username field is required!",
                                minLength: {
                                    value: 6,
                                    message: "Username has atleast 6 characters!"
                                }
                            })} 
                            />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="form-floating mt-3 mb-3">
                            <input 
                            type="password" 
                            className="form-control" 
                            id="pwd" 
                            placeholder="Enter password" 
                            {...register("password", {
                                required: "Password field is required!",
                                minLength: {
                                    value: 6,
                                    message: "Password has atleast 6 characters "
                                }
                            })} />
                            <label htmlFor="pwd">Password</label>
                        </div> 
                        <Button onClick={() => {
                            if (errors?.username?.message || errors?.password?.message) {
                                notify();
                            }
                        } } type="submit" className="w-100">Login</Button>
                    </form>
                    <div className="d-flex align-items-center justify-content-center pb-4 mt-3">
                        <p style={{ fontSize: "12px"}} className="mb-0 me-2">Don't have an account?</p>
                        
                        <Link className="" to={"/signup"}>
                            <Button style={{ fontSize: "12px"}} variant="outline-danger">Create New</Button>
                        </Link> 
                    </div>
                </div>
            </section>
        </>
    )
}