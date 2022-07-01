import '../styles/Footer.css'
import git_logo from '../images/git_logo.png'

interface FooterProps{
    textValue: string
}

function Footer(props: FooterProps) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <p className="footer__text">
                        {props.textValue}
                    </p>
                    <a href="#" className="footer__link">
                        <img src={git_logo} alt="github-icon" className="footer__img"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer