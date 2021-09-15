import { Card } from "react-bootstrap";
import me from '../me.jpg';
export default function AboutMe(){
    return(
        <div>
            
            <img className="photo" src={me}/>
                <div>
                    <h1 className="name">Michele Gao</h1>
                    <h2 className="title">Full Stack Software Engineer</h2>
                </div>  
            <section>
                <h3> A mother, a coder, and live for the ability to be creative.  </h3>
                
            </section>
            
        </div>
    )
}