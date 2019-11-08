import React, { Component } from 'react';
import { Button, 
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

  deleteCard =(id) => document.getElementById(id).style.display = "none";

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
            <Button onClick={() => this.deleteCard(item.id)}>Delete this card</Button>
          </CardBody>
        </Card>      
        )}
      </CardColumns>
      </div>
    )
  }
};

export default Game;
