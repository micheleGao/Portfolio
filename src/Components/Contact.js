import { Card } from "react-bootstrap";
import { useState } from 'react'
import { Document, Page } from 'react-pdf';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import { Document, Page } from 'react-pdf/dist/esm/entry.parcel';



export default function Contact() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div classname="contained-conact-sheet">
            <div className="contact-container">
                <Card style={{ width: '63rem' }}>
                    <Card.Body>
                        <Card.Title><h1>Contact Me:</h1></Card.Title>
                        <Card.Text>
                            <h2>Email: Michele.gao.shellies@icloud.com</h2>
                        </Card.Text>
                        <Card.Link href="https://github.com/micheleGao"><h2>Github</h2></Card.Link>
                        <Card.Link href="https://app.netlify.com/teams/michelegao"><h2>Netlify</h2></Card.Link>
                        {/* <div>
                            <Document
                                file="SoftwareResume.pdf"
                                onLoadSuccess={onDocumentLoadSuccess}
                            >
                                <Page pageNumber={pageNumber} />
                            </Document>
                            <p>Page {pageNumber} of {numPages}</p>
                        </div> */}
                        <Card.Link href="https://docs.google.com/document/d/e/2PACX-1vQHNKpVWU4y82gFFJMU1UfOtSYWHMaUXc8eXQQ87sXqHqRftz2dlmbbwczWbyTzHxLq6f27wAWehSpz/pub" target="_blank"><h2>Resume</h2></Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '12rem' }} className="skills">
                <Card.Body>
                    <Card.Title>Specializing in:</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JSX</li>
                            <li>SASS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Express</li>
                            <li>Mongoose</li>
                            <li>Python</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </div >
    )
}