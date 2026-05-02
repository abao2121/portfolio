import profilePic from '../images/me-in-isec.jpg';
import './aboutme.css';


export const AboutMe = () => {
    return (
        <div className = "aboutme-container">
            <div className = "aboutme-text-container">
                <div>
                    <p>I'm a <strong>Computer Engineering</strong> & <strong>Computer Science</strong> student, interested in the intersection of hardware and high-level software</p>
                </div>
            </div>
            <img className = "profilePic" src = {profilePic}/>
        </div>
    )
}