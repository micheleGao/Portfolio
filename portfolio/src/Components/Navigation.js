import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
            <Nav justify variant="tabs">
                <Nav.Item>
                    <Nav.Link as={Link} to="/"> About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Featured">Featured Work</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Contact"> Contact Info.</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}