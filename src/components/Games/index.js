import { Component } from "react";
import witcher from "../../assets/img/witcher.jpeg";

import "./styles.scss";

class Games extends Component {
    render () {
        return (
            <article className="games">
                <img className="img" src={witcher} alt="the witcher game"/>
                <p className="content">
                    Представители CD Projekt Red объявили о проведении ещё одного праздничного стрима,
                    который в этот раз посвящён третьему «Ведьмаку». Мероприятие стартует 20 июля в 17:00
                    на Twitch-канале разработчиков, причём в трансляции примет участие и директор по кампании
                    Филипп Вебер. Судя по всему, как и в прошлый раз, не стоит ожидать каких-то крупных
                    анонсов — авторы просто будут вспоминать про опыт создания проекта. Ранее уже прошли 
                    подобные трансляции по первой и второй частям серии, которые можно посмотреть в записи
                    на официальном сайте CD Projekt Red.
                </p>
            </article>
        );
    }
}

export default Games;