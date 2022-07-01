import sinister from '../images/posters/sinister.jpg'
import icon_favourite from '../images/icon_favourite.png'
import icon_watch_later from '../images/icon_watch_later.png'
import '../styles/Film.css'

function Film() {

    return (
        <li className="film">
            <img className={'film__poster'} src={sinister} alt={'poster'}/>
            <div className="film-about">
                <div className="film-about__top">
                    <p className="film-about__range">
                        Рейтинг: 8.4
                    </p>
                    <img src={icon_favourite} alt="icon-favorite" className="film-about__favourite"/>
                    <img src={icon_watch_later} alt="icon-watch-later" className="film-about__later"/>
                </div>
                <h4 className="film-about__title">
                    Синистер
                </h4>
                <button className="film-about__btn">
                    Подробнее
                </button>
            </div>
        </li>
    )
}

export default Film
