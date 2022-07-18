import { Component } from "react";
import kabisheva from "../../assets/img/kabisheva.jpeg";

import "./styles.scss";

class Culture extends Component {
    render () {
        return (
            <article className="culture">
                <img className="img" src={kabisheva} alt="kabisheva about inclusive theater"/>
                <p className="content">
                    Исполнительный директор кинотеатрального проекта «ВзаимоДействие» Ксения Кабишева
                    — о том, как научиться слушать и слышать «другого» человека. Инклюзивный театр —
                    что приходит в голову зрителю, который впервые видит приставку «инклюзивный», приобретая
                    билет на спектакль? Скучно, грустно, а если и весело, то это скорее капустник какой-то,
                    нежели полноценный художественный продукт. А за это еще и платить надо? Подобные стереотипы
                    у большей части театральной аудитории в России сохраняются от отсутствия опыта соприкосновения
                    с современным, актуальным и качественным инклюзивным искусством.
                </p>
            </article>
        );
    }
}

export default Culture;