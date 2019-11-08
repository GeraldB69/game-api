import React, { Component } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardColumns
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.games = this.state.games;
  }

  render() {
    
    return(
      <div>
      <CardColumns>
        {this.props.games.map( item =>
        <Card body id={item.id}>
          <CardImg top width="100%" src={item.background_image} alt={item.slug} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <CardSubtitle>Ratings: {item.rating}</CardSubtitle>
          </CardBody>
        </Card>      
        )}
      </CardColumns>
      </div>
    )
  }
};

export default Game;
