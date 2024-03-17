import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardColumns } from 'reactstrap';
import { NavLink as RouterNavLink, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastGames: false,
    };
  }

  selectLastGames = () => this.setState({lastGames: !this.state.lastGames});
  
  render() {
    return(
      <>
        <Nav pills>
          <NavItem>
            <NavLink tag={RouterNavLink} to={"/"} active>Home</NavLink>
          </NavItem>
          <NavItem  className="float-right">
            <NavLink active onClick={() => this.selectLastGames()}>
              {this.state.lastGames ? 'All Games' : 'Last Games'}
            </NavLink>            
          </NavItem>
        </Nav>
        &nbsp;
        <CardColumns>
          {this.props.games
            .filter(item => !this.state.lastGames ? item : item.release_date >= '2024-00-00')
            .map((item,index) => 
          <Card id={item.id} key={item.id}>
            <CardBody>
              <CardTitle><h4>{item.title}</h4></CardTitle>
              <CardImg width="100%" src={item.thumbnail} alt={item.title} />
            </CardBody>
            <CardSubtitle>
              Realease Date: {item.release_date}<br />
              Genre: {item.genre}
            </CardSubtitle>
            <Link to={`/game/fullscreen/${item.id}`} > 
              <Button color="info" onClick={() => this.props.setTitle(item.title)}>Fullscreen</Button>
            </Link>
            &nbsp;
            <Button color="danger" onClick={() => this.props.deleteCard(item.id)}>Delete Item {item.id}</Button>
          </Card>
          )}
        </CardColumns>
      </>
    )
  }
};

const Fullscreen = (props) => {
  return (
    <>
      <Nav pills>
        <NavItem>
          <NavLink tag={RouterNavLink} to={"/"} active>Back</NavLink>
        </NavItem>
      </Nav>
      <Card>
        <CardTitle><h4>{props.title}</h4></CardTitle>
        <CardImg 
          width="100%" 
          src={`https://www.freetogame.com/g/${props.id}/thumbnail.jpg`}    
          alt={`${props.name}`} 
        />
      </Card>
    </>
  )
};

export { Fullscreen, Game };
