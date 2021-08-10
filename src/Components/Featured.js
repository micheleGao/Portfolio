import { Card } from "react-bootstrap";

export default function Contact() {
    return (
        <div>
            <div className="projects-container">
                <a href ="https://michelegao.github.io/trivia_game/">
                    <Card className="projects" style={{ width: '20rem' }} key={1}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://user-images.githubusercontent.com/72947727/121696123-bdea7b80-ca99-11eb-99b6-80e2d1d0501f.png" alt='' width="200"/>
                            <Card.Text className="card-font">
                                Trivia Game was a game created to test your memory on some mindless things, it is timed, and gives a cumulative score with the scored correct answers
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <a href="https://gifted-perlman-16f6e4.netlify.app">
                    <Card className="projects" style={{ width: '22rem' }} key={2}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://user-images.githubusercontent.com/72947727/124197702-23c89280-da9d-11eb-8bad-7743cba306c5.png" alt='' width="200"/>
                            <Card.Text className="card-font">
                                Flaming Flamingos is a department store. The store sells electronics, clothing, and jewelry. Each category has a link provided for you to navigate easily through the site. There is also a fun link that navigates to a page with Rick and Morty episode photos.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <a href ="https://artgallerymg.netlify.app">
                    <Card className="projects" style={{ width: '22rem' }} key={2}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://user-images.githubusercontent.com/72947727/124680970-88b52b80-de95-11eb-9662-9512c37a3faf.png" alt='' width="200"/>
                            <Card.Text className="card-font">
                            A website to enjoy the beauty of art. There's a Homepage, a Gallery, and About page. All photos were sourced from HarvardArtMuseum.org
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <a href ="https://agoraforum.netlify.app/">
                    <Card className="projects" style={{ width: '22rem' }} key={2}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://user-images.githubusercontent.com/72947727/126333161-fcfcbdd9-687f-4485-ad14-f4ccc305651b.png" alt='' width="100"/>
                            <Card.Text className="card-font">
                            A collaborative team project - A forum site, you can add a forum, post to a forum, and edit your post. Full-Stack application with Mongoose, Node js, a deployed backend with heroku. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
                <a href ="https://gettingjiggywithit.netlify.app/">
                    <Card className="projects" style={{ width: '22rem' }} key={2}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://user-images.githubusercontent.com/72947727/128905482-1374f389-5d75-47eb-9bf9-871b937a5999.png" alt='' width="100"/>
                            <Card.Text className="card-font">
                            A music app created to listen to streamed music from youtube. Add a review to your favorite artists, and listen to their songs available on the site! A Full-Stack application using Django Rest Frame, Python, React, JS, and Bootsrap.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </div>
        </div>
    )
}