import React, { Component } from 'react';
import axios from "axios";
import Game from "./Game";

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games:[{
        "id": 3498,
        "slug": "grand-theft-auto-v",
        "name": "Grand Theft Auto V",
        "released": "2013-09-17",
        "background_image": "https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg",
        "rating": 4.47,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "genres": [
        {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 78074,
        "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
        },
        {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter",
        "games_count": 21835,
        "image_background": "https://media.rawg.io/media/games/8e0/8e032ac4faf1136e7d708bb3ac61af23.jpg"
        }
        ],
        "clip": {
        "clip": "https://media.rawg.io/media/stories-640/5b0/5b0cfff8c606c5e4db4f74f108c4413b.mp4",
        "clips": {
        "320": "https://media.rawg.io/media/stories-320/91d/91d6b5963064a5f686f635c302095b55.mp4",
        "640": "https://media.rawg.io/media/stories-640/5b0/5b0cfff8c606c5e4db4f74f108c4413b.mp4",
        "full": "https://media.rawg.io/media/stories/f64/f64ce0b857918b0c202f2a5d3217848e.mp4"
        },
        "preview": "https://media.rawg.io/media/stories-previews/f65/f6593df6c8df32c7f4763f9cb112a514.jpg"
        },
        "short_screenshots": [
        {
        "id": -1,
        "image": "https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg"
        },
        {
        "id": 1827219,
        "image": "https://media.rawg.io/media/screenshots/1b4/1b4eefb4cc2a77d4d35bb4a6926f3189.jpg"
        },
        {
        "id": 1827221,
        "image": "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
        },
        {
        "id": 1827222,
        "image": "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"
        },
        {
        "id": 1827223,
        "image": "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg"
        },
        {
        "id": 1827224,
        "image": "https://media.rawg.io/media/screenshots/2dc/2dc7ea94641f7329d177f228564b968a.jpg"
        },
        {
        "id": 1827225,
        "image": "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg"
        }
        ]
      }]
    }
  }

  componentDidMount() {
    this.getInfos();
    setInterval(
      () =>
        axios
          .get("https://wild-games.herokuapp.com/api/v1")
          .then(({ data }) => this.setState({ games:data })),
      1000
    );
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
