import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/auth/login")
    }

    return (
        <Navbar expand="lg">
            <Container>
                <NavLink to="/" className='navbar-brand'>DAGStore</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>Trang chủ</NavLink>
                        <NavLink to="/user" className='nav-link'>Người dùng</NavLink>
                        <NavLink to="/admin" className='nav-link'>Quản trị</NavLink>
                        {/* <Nav.Link href="/">Trang chủ</Nav.Link>
                        <Nav.Link href="/user">Người dùng</Nav.Link>
                        <Nav.Link href="/admin">Quản trị</Nav.Link> */}
                    </Nav>
                    <Nav className="ms-auto">
                        <Button className='btn btn-login' onClick={() => handleLogin()}>Đăng nhập</Button>
                        <Button className='btn btn-signup' onClick={() => { navigate("/auth/register") }}>Đăng ký</Button>
                        {/* <NavDropdown title="Cài đặt" id="basic-nav-dropdown">
                            <NavDropdown.Item>Trang cá nhân</NavDropdown.Item>
                            <NavDropdown.Item>
                                Đăng nhập
                            </NavDropdown.Item>
                            <NavDropdown.Item>Đăng xuất</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;