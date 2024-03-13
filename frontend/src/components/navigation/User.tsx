import { Nav, Button, NavDropdown, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { instance } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavSigninProps } from '../../definitions/models';

export const UserSignInComponent = ({ setActive, refetch, data, loading }: NavSigninProps) => {
    const location = useLocation();
    const navigate = useNavigate();
    const logoutButton = async () => {
        try {
            const response = await instance.post(import.meta.env.VITE_AUTH_LOGOUT);
            if (response.status === 200) {
                navigate(0);
            }
        } catch(error) {
            
        }
    }

    useEffect(() => {
        if (location.state?.message) {
            refetch();
        }
    }, [location.state?.message])

    return(
        <>
            { (!data && !loading) && 
                <Nav.Link onClick={() => setActive("")} to={"/signin"} as={Link} eventKey="6">
                    <Button className={location.pathname.includes("signin") || location.pathname.includes("signup")? "active": ""} variant="outline-light">SignIn</Button>
                </Nav.Link>
            }
            {loading &&
            <div className='py-3'>
                <Spinner animation="grow" variant="info" size='sm' />
                <Spinner animation="grow" variant="info" size='sm' />
                <Spinner animation="grow" variant="info" size='sm'/>
            </div> }
            {(!loading && data) && 
                <NavDropdown color="white" title={
                    <span className='text-white fw-bold'>
                        <img className='me-2' src={data?.avatar} style={{ width: "30px"}} alt="" />
                        {data?.username}
                    </span>} id="basic-nav-dropdown">
                    <NavDropdown.Item to={"/profile"} as={Link} eventKey={"7"}>Profile</NavDropdown.Item>
                    <NavDropdown.Item to={"/watch_list"} as={Link} eventKey={"8"}>Watch List</NavDropdown.Item>
                    <NavDropdown.Item onClick={logoutButton}>Logout</NavDropdown.Item>
                </NavDropdown>
            }
        </>
    )
}