import React, { Component } from 'react';
import { Button, 
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardColumns
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.props.games};
  }

  render() {
    
    return(
      <div>
        <Button>Best Games</Button>
        <CardColumns>
          {this.props.games.map( (item,index) =>
          <Card body id={item.id} key={item.id}>
            <CardImg top width="100%" src={item.background_image} alt={item.slug} />
            <CardBody>
              <CardTitle>{item.name}</CardTitle>
              <CardSubtitle>Ratings: {item.rating}</CardSubtitle>
              <Button onClick={() => this.props.deleteCard(index)}>Delete this card</Button>
            </CardBody>
          </Card>      
          )}
        </CardColumns>
      </div>
    )
  }
};

export default Game;
