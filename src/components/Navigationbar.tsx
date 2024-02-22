import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Nav, Button, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
export const Navigationbar = () => {
    const location = useLocation();
    const [active, setActive] = useState<string>(location.pathname);
    return (
        <>
                <Navbar expand="lg" bg="primary" collapseOnSelect  className="shadow-sm text-white navbar-dark">
                    <Container>
                        <Navbar.Brand className='text-white fw-bolder' to={"/"} as={Link} onClick={() => setActive("/")} >MovieInfos</Navbar.Brand>
                        <Navbar.Toggle className="border border-3"   aria-controls={`offcanvasNavbar-expand-lg`} />
                        <Navbar.Offcanvas className="bg-primary w-75" id={`offcanvasNavbar-expand-md}`} aria-labelledby={`offcanvasNavbarLabel-expand-sm`} placement="end">
                            <Offcanvas.Header className='ms-auto' closeButton />
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 gap-3 align-items-lg-center">
                                    <Nav.Link className={active === "/"? "active-link text-white fw-bolder": "text-light"} onClick={() => setActive("/")} to={"/"} as={Link} eventKey="1">Home</Nav.Link>
                                    <NavDropdown color="white" title={<span className={location.pathname.includes("search")? "active fw-bolder text-white": "text-light"}>Search</span>} id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={() => setActive("/search")} to={"/search/movie"} as={Link}  eventKey={"2"}  >Movie</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => setActive("/search")} to={"/search/tv"}as={Link}  eventKey={"3"} >
                                            TV
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => setActive("/search")} to={"/search/person"} as={Link} eventKey={"4"}>Person</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </NavDropdown>
                                    <Nav.Link className={active === "/about"? "active-link text-white fw-bolder": "text-light"} onClick={() => setActive("/about")} to={"/about"} as={Link} eventKey="5">About</Nav.Link>
                                    <Nav.Link onClick={() => setActive("/signup")} to={"/signup"} as={Link} eventKey="6">
                                        <Button className={active === "/signup"? "active": ""} variant="outline-light">SignUp</Button>
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
        </>
        
    );
}
