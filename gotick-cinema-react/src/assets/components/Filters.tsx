import '../styles/Filters.css'
import Genre from "./Genre";
import About from "./About";

function Filters() {
    return (
        <form action="#" className="filters-form">
            <div className="container">
                <div className="filters-wrapper">
                    <div className="filters-box">
                        <h2 className="filters__title">
                            Фильтры
                        </h2>
                        <button className="btn_reset">Сбросить все фильтры</button>

                        <div className="filter-sort">
                            <h3 className="filter__title">
                                Сортировать по рейтингу:
                            </h3>
                            <select>
                                <option>Сортировать по убыванию</option>
                                <option>Сортировать по возрастанию</option>
                            </select>
                        </div>

                        <div className="filter-date">
                            <h3 className="filter__title">
                                Год релиза:
                            </h3>
                            <select>
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                            </select>
                        </div>

                        <div className="filter-country">
                            <h3 className="filter__title">
                                Страна:
                            </h3>
                            <select>
                                <option>США</option>
                                <option>Великобритания</option>
                                <option>Канада</option>
                                <option>Австралия</option>
                            </select>
                        </div>

                        <div className="filter-genre">
                            <ul className="filter-genre__list">
                                <Genre genre={'фэнтези'} />
                                <Genre genre={'триллер'} />
                                <Genre genre={'фантастика'} />
                                <Genre genre={'детектив'} />
                                <Genre genre={'боевик'} />
                                <Genre genre={'комедия'} />
                            </ul>
                        </div>

                        <div className="filter-about">
                            <h3 className="filter__title">
                                О чем:
                            </h3>

                            <ul className="filter-genre__list">
                                <About about={'о вампирах'} />
                                <About about={'о ведьмах'} />
                                <About about={'о демонах'} />
                                <About about={'о приведениях'} />
                                <About about={'слэшеры'} />
                            </ul>
                        </div>

                        <div className="filters-btn_box">
                            <button className="filters-btn__prev">Назад</button>
                            <button className="filters-btn__next">Вперёд</button>
                        </div>

                        <div className="filters-pagination">
                            1 of 100
                        </div>

                    </div>
                </div>
            </div>
        </form>
    )
}

export default Filters