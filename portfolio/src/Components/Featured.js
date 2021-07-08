import { Card } from "react-bootstrap";

export default function Contact() {
    return (
        <div>
            <div className="projects-container">
            <Card className="projects" style={{ width: '30rem' }} key={1}>
                <Card.Body>
                    <Card.Img variant="top" src="https://user-images.githubusercontent.com/72947727/121696123-bdea7b80-ca99-11eb-99b6-80e2d1d0501f.png" alt='' width="200" />
                    <Card.Text>
                        Trivia Game was a game created to test your memory on some mindless things, it is timed, and gives a cumulative score with the scored correct answers
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="projects" style={{ width: '30rem' }} key={2}>
                <Card.Body>
                    <Card.Img variant="top" src="https://user-images.githubusercontent.com/72947727/124197702-23c89280-da9d-11eb-8bad-7743cba306c5.png" alt='' width="1000" />
                    <Card.Text>
                        Flaming Flamingos is a department store. The store sells electronics, clothing, and jewelry. Each category has a link provided for you to navigate easily through the site. There is also a fun link that navigates to a page with Rick and Morty episode photos.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}