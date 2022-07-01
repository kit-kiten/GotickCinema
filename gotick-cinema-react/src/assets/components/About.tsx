import '../styles/About.css'

interface AboutProps{
    about: string
}

function Genre(props: AboutProps) {

    return (
        <li className="filter-about__item">
            <label >
                <input type="checkbox" className="filter-genre__checkbox"/>
                {props.about}
            </label>
        </li>
    )
}

export default Genre