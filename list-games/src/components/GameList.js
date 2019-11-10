import React, { Component } from 'react';
import axios from "axios";
import { Game, Screenshot } from "./Game";

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games:[],
      screenshots: []
    }
  }

  componentDidMount() {
    this.getInfos();
  }

  getInfos = async () => {
    try {
      const { data } = await axios.get(
        "https://wild-games.herokuapp.com/api/v1"
      );
      this.setState({ games: data });
    } catch (e) {
      console.log(e);
    }
  };

  deleteCard = (index) => {
    const newGames = this.state.games.filter((item, i) => i !== index);
    this.setState({games: newGames});
  }

  render() {
    if (this.state.games.length === null) this.getInfos();
    else if (this.props.match.params.id){
      return <Screenshot 
        name = {this.state.games[this.props.match.params.id].name}
        screenshots = {this.state.games[this.props.match.params.id].short_screenshots} 
      />
    }
    else {
      return (
        <Game 
          games = {this.state.games} 
          deleteCard = {(index) => this.deleteCard(index)}
        />
      );
    }      
  }
}

export default GameList;
