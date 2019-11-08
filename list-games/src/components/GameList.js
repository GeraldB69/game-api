import React, { Component } from 'react';
import axios from "axios";
import Game from "./Game";

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games:[]
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
      this.setState({ games:data });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    if (this.state.games.length === null) 
      this.getInfos();
    else 
     return <Game games = {this.state.games} />
  }
}

export default GameList;
