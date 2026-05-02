import './skills.css'
import csharp from '../images/logos/Csharp.png';
import cpp from "../images/logos/C++.png";
import python from "../images/logos/python.png";
import react from "../images/logos/react.png";
import typescript from "../images/logos/ts.png"

export const Skills = () => {
    return (
        <div className = "skills-container">
            <h2 className = "skills-header">What I work with</h2>
            <div className = "logos-container">
                <img className = "logoimage" src = {csharp}/>
                <img className = "logoimage" src = {cpp}/>
                <img className = "logoimage" src = {python}/>
                <img className = "logoimage" src = {react}/>
                <img className = "logoimage" src = {typescript}/>
            </div>
        </div>
    )
}