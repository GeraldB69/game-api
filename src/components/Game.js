import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardColumns } from 'reactstrap';
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestGames: false 
    };
  }

  selectBestGames = () => this.setState({bestGames: !this.state.bestGames});
  
  render() {
    return(
      <div>
        <Nav pills>
          <NavItem>
            <NavLink tag={RouterNavLink} to={"/"} active>Home</NavLink>
          </NavItem>
          <NavItem  className="float-right">
            <NavLink active onClick={() => this.selectBestGames()}>
              {this.state.bestGames ? 'All Games' : 'Best Games'}
            </NavLink>            
          </NavItem>
        </Nav>
        &nbsp;
        <CardColumns>
          {this.props.games
            .filter(item => !this.state.bestGames ? item : item.rating >= 4.5)
            .map((item,index) =>
          <Card id={item.id} key={item.id}>
            <CardBody>
              <CardTitle><h4>{item.name}</h4></CardTitle>
              <CardImg width="100%" src={item.background_image} alt={item.slug} />
            </CardBody>
            <CardSubtitle>Ratings: {item.rating}</CardSubtitle>
            <Link to={`/game/screenshot/${index}`} > 
              <Button color="info">{item.short_screenshots.length} screenshots</Button>
            </Link>
            {' '}
            <Button color="danger" onClick={() => this.props.deleteCard(index)}>Delete</Button>
          </Card>      
          )}
        </CardColumns>
      </div>
    )
  }
};

const Screenshot = (props) => {
  return (
    <div>
      <Nav pills>
        <NavItem>
          <NavLink tag={RouterNavLink} to={"/"} active>Back</NavLink>
        </NavItem>
      </Nav>
      <h2>{props.name}</h2>
      <h3>{props.screenshots.length} screenshot{props.screenshots.length > 1 && "s" }</h3>
      <CardColumns>
        {props.screenshots.map((item, index) => 
          <Card key={index}>
            <CardImg width="100%" src={item.image} alt={`${props.name} ${index}`} />
          </Card>
        )}
      </CardColumns>
    </div>
  )
};

export { Screenshot, Game };
