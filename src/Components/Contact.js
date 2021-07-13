import { Card } from "react-bootstrap";


export default function Contact() {
    return (
        <div>
            <div className="contact-container">
            <Card style={{ width: '60rem' }}>
                <Card.Body>
                    <Card.Title><h1>Contact Me:</h1></Card.Title>
                    <Card.Text>
                        <h2>Email: Michele.gao.shellies@icloud.com</h2>
                    </Card.Text>
                    <Card.Link href="https://github.com/micheleGao"><h2>Github</h2></Card.Link>
                    <Card.Link href="https://app.netlify.com/teams/michelegao"><h2>Netlify</h2></Card.Link>
                    <Card.Link href="https://docs.google.com/document/d/1vSA2xJh6PMjCeD_EFKkqY1fFfP56Bn7apSNzHO_FWi8/edit?usp=sharing"><h2>Resume</h2></Card.Link>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}