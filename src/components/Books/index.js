import { Component } from "react";
import labkovsky from "../../assets/img/labkovsky.jpeg";

import "./styles.scss";

class Books extends Component {
    render () {
        return (
            <article className="books">
                <img className="img" src={labkovsky} alt="labkovsky's book"/>
                <p className="content">
                    Из послушных детей вырастают «удобные» и несчастные взрослые. Из круглых отличников —
                    перфекционисты, остро переживающие из-за малейшего промаха. Из «заорганизованных»,
                    которых родители отдали в спорт, музыкалку и, конечно, на иностранные языки — люди без
                    увлечений, не интересные сами себе. А как получаются счастливые взрослые со здоровой
                    психикой, которые шагают по жизни легко и с любопытством? Как раз об этом новая,
                    долгожданная новинка Михаила Лабковского — «Люблю и понимаю».
                </p>
            </article>
        );
    }
}

export default Books;