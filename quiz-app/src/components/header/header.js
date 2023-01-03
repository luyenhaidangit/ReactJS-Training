import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">DAGStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Trang chủ</Nav.Link>
                        <Nav.Link href="#user">Người dùng</Nav.Link>
                        <Nav.Link href="#admin">Quản trị</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <NavDropdown title="Cài đặt" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Trang cá nhân</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Đăng nhập
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Đăng xuất</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;