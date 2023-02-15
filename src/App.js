import logo from "./logo.svg";
import "./App.css";
import PlayerList from "./components/PlayerList/PlayerList";
import Movies from "./components/Movies/Movies";
import Modal from "./components/Modal/Modal";

import { useState } from "react";
import withScreenSizes from "./components/WithScreenSizes/WithScreenSizes";

const movies = [
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
  {
    name: "Den of Thieves",
    url: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      alt: "pokemon",
    },
    year: "2016",
    category: "Action",
  },
];

const data = {
  playerListData: {
    video: { url: "https://unpkg.com/big-buck-bunny-1080p@0.0.6/video.mp4" },
    playerCard: {
      title: "Big Comeback",
      context: `nullan porta, eros id aliquam pulvinar, urna ex mattis eros. quis ves-tubulum
      urna turpis et risus. Muris porttitior risus faaucibus, auctor arcu a, tincidunt nibaaaaaa`,
      buttons: [
        { id: 1, title: "WATCH NOW", color: true },
        { id: 2, title: "+ PLAYLIST", color: false },
      ],
    },
  },
  moviesData: {
    schedule: ["Today", "This week", "Last 30 days"],
    movies: [
      {
        position: true,
        id: 1,
        color: "#131722",
        name: "Action & Drama Movies",
        movies,
      },
      {
        position: false,
        id: 2,
        color: "#0f131e",
        name: "Finniest Comdey MOvies of  2018",
        movies,
      },
    ],
  },
};

function App(props) {
  const [moviesPosition, setMoviesPosition] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const {
    moviesData: { movies, schedule },
    playerListData,
  } = data;
  return (
    <div className="App">
      <PlayerList
        screenSizes={props.screenSizes}
        playerListData={playerListData}
        openModal={openModal}
      ></PlayerList>
      {movies.map(({ color, id, movies, name, position }) => {
        return (
          <Movies
            moviesPosition={position}
            screenSizes={props.screenSizes}
            movies={movies}
            schedule={schedule}
            key={id}
            color={color}
            name={name}
          ></Movies>
        );
      })}
      <Modal isOpen={isOpen} closeModal={closeModal}></Modal>
    </div>
  );
}

export default withScreenSizes(App);
