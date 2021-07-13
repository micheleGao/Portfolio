import { Card } from "react-bootstrap";

export default function AboutMe(){
    return(
        <div>
            <img className="photo"src="https://media-exp3.licdn.com/dms/image/C4D03AQEbDBYTMsyPTw/profile-displayphoto-shrink_400_400/0/1621974221732?e=1631145600&v=beta&t=vwy6x948hllBL_BSc1FB_nVSWEKiqiGvu8YbsizOuZs"/>
                <h1>Full Stack Software Enigneer</h1>
            <section>
                Currently living in Brooklyn, New York. A mother, a coder, and live for the ability to be creative. 
            </section>
            <Card style={{ width: '20rem' }} className="skills">
                <Card.Body>
                    <Card.Title>SPECIALIZING IN:</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>REACT</li>
                            <li>EXPRESS</li>
                            <li>MONGOOSE</li>
                            <li>PHYTON</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}