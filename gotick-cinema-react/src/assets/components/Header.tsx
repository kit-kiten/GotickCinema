import '../styles/Header.css'
import logo from '../images/logo.png'

interface HeaderProps{
    btnValue: string
}

function Header(props: HeaderProps) {
    return (
        <div className="header">
            <div className="container">
                <div className="header-inner">
                    <a href="#" className="header__link">
                        <img src={logo} alt="header-logo" className="header__logo"/>
                    </a>
                    <button className="header__btn">{props.btnValue}</button>
                </div>
            </div>
        </div>
    )
}

export default Header