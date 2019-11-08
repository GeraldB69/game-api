import React, { Component } from 'react';
import { Button, 
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardColumns
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.games,
      bestGames: false 
    };
  }

  selectBestGames = () => {
    this.setState({bestGames: !this.state.bestGames});
  }

  render() {
    
    return(
      <div>
        <Button color="primary" size="lg" onClick={() => this.selectBestGames()}>
          {this.state.bestGames ? 'All Games' : 'Best Games'}
        </Button>
        <CardColumns>
          {this.props.games
            .filter(item => !this.state.bestGames ? item : item.rating >= 4.5)
            .map((item,index) =>
          <Card id={item.id} key={item.id}>
            <CardBody>
              <CardTitle><h4>{item.name}</h4></CardTitle>
              <CardImg top width="100%" src={item.background_image} alt={item.slug} />
            </CardBody>
            <CardSubtitle>Ratings: {item.rating}</CardSubtitle>
            <Button onClick={() => this.props.deleteCard(index)}>Delete this card</Button>
          </Card>      
          )}
        </CardColumns>
      </div>
    )
  }
};

export default Game;
