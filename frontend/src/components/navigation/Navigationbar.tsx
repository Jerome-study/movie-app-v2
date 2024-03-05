import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Nav, Button, NavDropdown, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchBackend } from '../../hooks/useFetch';
import { instance } from '../../utils/utils';
import { FetchUserProps } from '../../definitions/models';

export let refetchButton : Function;
export const Navigationbar = () => {
    const location = useLocation();
    const [active, setActive] = useState<string>(location.pathname);
    const { data, loading, refetch }: FetchUserProps = useFetchBackend(import.meta.env.VITE_API_GETUSER) 
    const navigate = useNavigate();
    useEffect(() => {
        if (location.state?.message) {
            refetch();
        }
        if (location.pathname.split("").length > 1) {
            setActive("")
        } else {
            setActive("/")
        }
    }, [location.pathname]);
    const logoutButton = async () => {
        try {
            const response = await instance.post(import.meta.env.VITE_AUTH_LOGOUT);
            if (response.status === 200) {
                navigate(0);
            }
        } catch(error) {
            
        }
    }

    return (
        <>
            {data?.id}
                <Navbar expand="lg" style={{ backgroundColor: "#0d253f"}} collapseOnSelect  className={`${data? "py-3": ""} shadow-sm text-white navbar-dark`}>
                    <Container>
                        <Navbar.Brand className='text-white fw-bolder' href='/'>MovieInfos</Navbar.Brand>
                        <Navbar.Toggle className="border border-3"   aria-controls={`offcanvasNavbar-expand-lg`} />
                        <Navbar.Offcanvas className="w-75" id={`offcanvasNavbar-expand-md}`} aria-labelledby={`offcanvasNavbarLabel-expand-sm`} placement="end" style={{ backgroundColor:"#0d253f"}}>
                            <Offcanvas.Header className='ms-auto btn-close-white ' data-bs-theme="dark" closeButton />
                                
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 gap-3 align-items-lg-center">
                                    <Nav.Link className={active === "/"? "active-link text-white fw-bolder": "text-light"} onClick={() => setActive("/")} to={"/"} as={Link} eventKey="1">Home</Nav.Link>
                                    <NavDropdown color="white" title={<span className={location.pathname.includes("search")? "active fw-bolder text-white": "text-light"}>Search</span>} id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={() => setActive("")} to={"/search/movie"} as={Link}  eventKey="2" >Movie</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => setActive("")} to={"/search/tv"}as={Link}  eventKey="3" >
                                            TV
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => setActive("")} to={"/search/person"} as={Link} eventKey="4">Actor/Actress</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </NavDropdown>
                                    <Nav.Link className={location.pathname.includes("about")? "active-link text-white fw-bolder": "text-light"} onClick={() => setActive("")} to={"/about"} as={Link} eventKey="5">About</Nav.Link>
                                    { (!data && !loading) && 
                                        <Nav.Link onClick={() => setActive("")} to={"/signin"} as={Link} eventKey="6">
                                            <Button className={location.pathname.includes("signin") || location.pathname.includes("signup")? "active": ""} variant="outline-light">SignIn</Button>
                                        </Nav.Link>
                                    }
                                    {loading &&<div className='py-1'>
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    </div> }
                                    { (!loading && data) && 
                                        <NavDropdown color="white" title={<span className='text-white fw-bold'>
                                            <img className='me-2' src={data?.avatar} style={{ width: "30px"}} alt="" />
                                            {data?.username}
                                            
                                        </span>} id="basic-nav-dropdown">
                                            <NavDropdown.Item to={"/profile"} as={Link} eventKey={"7"}>Profile</NavDropdown.Item>
                                            <NavDropdown.Item to={"/watch_list"} as={Link} eventKey={"8"}>Watch List</NavDropdown.Item>
                                            <NavDropdown.Item onClick={logoutButton}>Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    }
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
        </>
        
    );
}
