import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { useForm, SubmitHandler } from "react-hook-form"
import { InputFormProps } from "../definitions/models"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignUpComponent = () => {
    const { register, handleSubmit,formState: { errors }, watch } = useForm<InputFormProps>();

    const onSubmit: SubmitHandler<InputFormProps> = (data) => {
        console.log(data)
    }
    const notify = () => {
        toast.dismiss();
        toast.error(errors.username?.message, {
            toastId: 1
        });
        toast.error(errors.first_name?.message, {
            toastId: 2
        });

        toast.error(errors.last_name?.message, {
            toastId: 3
        });

        toast.error(errors.password?.message, {
            toastId: 4
        });

        toast.error(errors.confirm_password?.message, {
            toastId: 5
        });
    }

    


    return(
        <>
            <section className="d-flex position-relative justify-content-center align-items-center px-2" style={{ minHeight: "92vh", backgroundColor: "#f4f3f2"}}>
                <ToastContainer className="position-absolute" style={{ top: "0"}} />
                <div className="bg-light position-relative rounded rounded-3 border border-2 shadow-sm w-100 py-4 p-3" style={{ minHeight: "50vh", maxWidth: "25rem", fontSize: "12px"}}>
                    <h1 className="text-center">SignIn</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating mb-3 mt-3">
                            <input 
                            type="text" 
                            className="form-control" 
                            id="email" 
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
                        
                        <div className="form-floating mb-3 mt-3">
                            <input 
                            type="text" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter First Name" 
                            {...register("first_name", {
                                required: "First Name field is required!"
                            })} 
                            />
                            <label htmlFor="first_name">First Name</label>
                        </div>

                        <div className="form-floating mb-3 mt-3">
                            <input 
                            type="text" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter First Name" 
                            {...register("last_name", {
                                required: "Last Name field is required!"
                            })} 
                            />
                            <label htmlFor="last_name">Last Name</label>
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
                            <label htmlFor="password">Password</label>
                        </div>
                        
                        <div className="form-floating mt-3 mb-3">
                            <input 
                            type="password" 
                            className="form-control" 
                            id="pwd" 
                            placeholder="Confirm password" 
                            {...register("confirm_password", {
                                required: "Confirm Password Required",
                                validate: (val: any) => {
                                    if (watch('password') !== val || val== "") {
                                        return "Password Do not Match"
                                    }
                                }
                            })} />
                            <label htmlFor="confirm_password">Confirm Password</label>
                        </div> 

                        <Button onClick={() => {
                            if (errors?.username?.message || errors?.password?.message || errors?.first_name || errors?.last_name || errors?.confirm_password) {
                                notify();
                            }
                        } } type="submit" className="w-100">Register</Button>
                    </form>
                    <div className="d-flex align-items-center justify-content-center pb-4 mt-3">
                        <p style={{ fontSize: "12px"}} className="mb-0 me-2">Have an account?</p>
                        
                        <Link className="" to={"/signin"}>
                            <Button style={{ fontSize: "12px"}} variant="outline-danger">SignIn</Button>
                        </Link> 
                    </div>
                </div>
            </section>
        </>
    )
}