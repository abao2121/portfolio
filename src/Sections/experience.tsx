import veeco from "../images/logos/veeco.png"
import nu_coe from "../images/logos/nu_coe.png"
import "./experience.css"

interface IExperience{
    title: string;
    companyLink: string;
    description: string;
    logoPath: string;
}

const Experience = ({title, companyLink, description, logoPath}: IExperience) => {
    return (
        <div className = 'experience-container'>
            <div className = 'experience-textcontainer'>
                <h2>{title}</h2>
                <div className = 'description-container'>
                    <p>{description}</p>
                </div>
            </div>
            <div className = 'logoContainer'>
                <a href= {companyLink} target="_blank" rel="noopener noreferrer">
                    <img className = "companyLogo" src = {logoPath}/>
                </a>
            </div>
        </div>
    )
}

export const MyExperiences = () => {
    return (
        <div className = 'MyExperiences-container'>
            <Experience 
            title = "Software Engineer Co-op"
            companyLink = "https://www.veeco.com/"
            description = "Developed C# application for validating and testing product configuration files, wrote tool communication contracts and implemented them in WCF and gRPC APIs, upgraded configuration files and set up tool PCs for customers"
            logoPath = {veeco}
            />
            <Experience
            title = "Undergraduate Researcher"
            companyLink =  "https://ece.northeastern.edu/"
            description = "Deconstructing CNN machine learning models using Python Numpy in application to MNIST and GTSRB datasets, simulating power consumption profiles of analog machine learning circuit"
            logoPath = {nu_coe}/>
        </div>
    )
}