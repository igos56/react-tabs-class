import { Component } from "react";
import dzuba from "../../assets/img/dzuba.jpeg";

import "./styles.scss";

class Sports extends Component {
    render () {
        return (
            <article className="sports">
                <img className="img" src={dzuba} alt="Dzuba player"/>
                <p className="content">
                    Артем Дзюба может продолжить карьеру в чемпионате Азербайджана. Как утверждает
                    «Спорт-Экспресс», нападающий прилетел в Баку, где может провести переговоры о трансфере
                    в «Нефтчи» или «Карабах». В прошлом сезоне 33-летний игрок забил 13 голов и сделал 10
                    результативных передач в 39 матчах за «Зенит», из которого он ушел по истечении срока
                    контракта. Сейчас Дзюба поддерживает форму с «Рубином».
                </p>
            </article>
        );
    }
}

export default Sports;