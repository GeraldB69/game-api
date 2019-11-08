import React, { Component } from 'react';
import axios from "axios";
import Game from "./Game";

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games:[]
    }
    // this.item = this.props.item;
    this.index = this.props.index;
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
    if (this.state.games.length === null) 
      this.getInfos();
    else {
      return <Game 
        games = {this.state.games}
        deleteCard = {(index) => this.deleteCard(index)}
      />
    }
  }
}

export default GameList;
