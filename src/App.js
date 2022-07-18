import {Component} from "react";
import ButtonList from "./components/ButtonList";
import Sports from "./components/Sports";
import Culture from "./components/Culture";
import Games from "./components/Games";
import Books from "./components/Books";

import "./App.scss";

class App extends Component {
  state = {
    sports: true,
    culture: false,
    games: false,
    books: false
  }

  changeTab (event) {
    switch(event.target.innerHTML) {
      case "Новости спорта":
        this.setState({
          sports: true,
          culture: false,
          games: false,
          books: false
        });
        break;
        case "Новости культуры":
          this.setState({
            sports: false,
            culture: true,
            games: false,
            books: false
          });
          break;
        case "Во что поиграть?":
          this.setState({
            sports: false,
            culture: false,
            games: true,
            books: false
          });
          break;
        case "Что почитать?":
          this.setState({
            sports: false,
            culture: false,
            games: false,
            books: true
          });
          break;
        default:
          this.setState({
            sports: true,
            culture: false,
            games: false,
            books: false
          })
    }
  }
  render () {
    return (
      <div className="App">
        <h1>React tabs as class components</h1>
        <section className="tabs">
          <ButtonList
            changeTab = {(event) => this.changeTab(event)}
          />
          {this.state.sports ? <Sports/> : null}
          {this.state.culture ? <Culture/> : null}
          {this.state.games ? <Games/> : null}
          {this.state.books ? <Books/> : null}
        </section>
      </div>
    );
  }
}

export default App;
