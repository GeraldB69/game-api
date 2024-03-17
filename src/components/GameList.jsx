import React, { Component } from 'react';
import { useParams } from 'react-router';  
import axios from "axios";

import { Game, Fullscreen } from "./Game";


const withRouter = WrappedComponent => props => {
  const params = useParams();
  return (
    <WrappedComponent {...props} params={params} />
  );
};


class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games:[],
      fullscreen:[] 
    }
  }

  componentDidMount() {
    this.getInfos();
  }

  getInfos = async () => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTION",
      "Content-Type": "application/json"
    };
    await axios.get(
        "/api/games?platform=pc",
        {withCredentials: false}, {headers}
      ).then(response => {
        this.setState({ games: response.data  });
      }).catch(e => {
        console.log(e);
      })
  };

  deleteCard = (id) => {
    const newGames = this.state.games.filter((item, i) => item.id !== id);
    this.setState({games: newGames});
  }

  setTitle = (title) => {
    this.setState({fullscreen: title} )
  } 

  render() {
    if (this.state.games.length === null) this.getInfos();
    else if (this.props.params.id){
      return <Fullscreen 
        id={this.props.params.id} 
        title ={this.state.fullscreen} 
      />
    }
    else {
      return (
        <Game 
          games = {this.state.games} 
          deleteCard = {(index) => this.deleteCard(index)}
          setTitle = {(title) => this.setTitle(title)} 
        />
      );
    }      
  }
}

export default withRouter(GameList);
