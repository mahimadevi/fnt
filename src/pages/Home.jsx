// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Background from "../assets/peakpx.jpg";
// import { FaPlay } from "react-icons/fa";
// import { AiOutlineInfoCircle } from "react-icons/ai";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchMovies, getGenres } from "../store";

// const Home = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const genres = useSelector((state) => state.netflix.genres);
//   const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getGenres());
//   }, []);

//   useEffect(() => {
//     if (genresLoaded) {
//       dispatch(fetchMovies({ genres, type: "all" }));
//     }
//   }, [genresLoaded]);

//   window.onscroll = () => {
//     setIsScrolled(window.pageYOffset === 0 ? false : true);
//     return () => (window.onscroll = null);
//   };

//   return (
//     <Container>
//       <Navbar isScrolled={isScrolled} />
//       <div className="hero">
//         <img src={Background} alt="background" className="background-image" />
//         <div className="container">
//           <div className="logo">
//             {/* <img src={MovieLogo} alt="Movie Logo" /> */}
//             OPPENHEIMER
//           </div>
//           <div className="buttons flex">
//             <button
//               className="flex j-center a-center"
//               onClick={() => navigate("/player")}
//             >
//               <FaPlay />
//               Play
//             </button>
//             <button className="flex j-center a-center">
//               <AiOutlineInfoCircle />
//               More Info
//             </button>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// const Container = styled.div`
//   background-color: black;
//   .hero {
//     position: relative;
//     .background-image {
//       filter: brightness(60%);
//     }
//     img {
//       height: 100vh;
//       width: 100vw;
//     }
//     .container {
//       position: absolute;
//       bottom: 5rem;
//       .logo {
//         margin-left: 5rem;
//         font-size: 6rem;
//       }
//       .buttons {
//         margin-left: 5rem;
//         margin-top: 2rem;

//         gap: 2rem;
//         button {
//           font-size: 1.4rem;
//           gap: 1rem;
//           border-radius: 0.2rem;
//           padding: 0.5rem;
//           padding-left: 2rem;
//           padding-right: 2.4rem;
//           border: none;
//           cursor: pointer;
//           transition: 0.2s ease-in-out;
//           &:hover {
//             opacity: 0.8;
//           }
//           &:nth-of-type(2) {
//             background-color: rgba(109, 109, 110, 0.7);
//             color: white;
//             svg {
//               font-size: 1.8rem;
//             }
//           }
//         }
//       }
//     }
//   }
// `;
// export default Home;















// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Background from "../assets/peakpx.jpg";
// import { FaPlay } from "react-icons/fa";
// import { AiOutlineInfoCircle } from "react-icons/ai";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchMovies, getGenres } from "../store";
// import Slider from "../components/Slider";

// const Home = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const genres = useSelector((state) => state.netflix.genres);
//   const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
//   const movies = useSelector((state) => state.netflix.movies);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getGenres());
//   }, [dispatch]);

//   useEffect(() => {
//     if (genresLoaded) {
//       dispatch(fetchMovies({ type: "all" }));
//     }
//   }, [genresLoaded, dispatch]);

//   // useEffect(() => {
//   //   console.log("Movies:", movies); // Add a log to see if movies are fetched correctly
//   // }, [movies]);

//   window.onscroll = () => {
//     setIsScrolled(window.pageYOffset === 0 ? false : true);
//     return () => (window.onscroll = null);
//   };

//   return (
//     <Container>
//       <Navbar isScrolled={isScrolled} />
//       <div className="hero">
//         <img src={Background} alt="background" className="background-image" />
//         <div className="container">
//           <div className="logo">OPPENHEIMER</div>
//           <div className="buttons flex">
//             <button
//               className="flex j-center a-center"
//               onClick={() => navigate("/player")}
//             >
//               <FaPlay />
//               Play
//             </button>
//             <button className="flex j-center a-center">
//               <AiOutlineInfoCircle />
//               More Info
//             </button>
//           </div>
//         </div>
//       </div>
//       <Slider movies={movies} />
//     </Container>
//   );
// };

// const Container = styled.div`
//   background-color: black;
//   .hero {
//     position: relative;
//     .background-image {
//       filter: brightness(60%);
//     }
//     img {
//       height: 100vh;
//       width: 100vw;
//     }
//     .container {
//       position: absolute;
//       bottom: 5rem;
//       .logo {
//         margin-left: 5rem;
//         font-size: 6rem;
//       }
//       .buttons {
//         margin-left: 5rem;
//         margin-top: 2rem;
//         gap: 2rem;
//         button {
//           font-size: 1.4rem;
//           gap: 1rem;
//           border-radius: 0.2rem;
//           padding: 0.5rem;
//           padding-left: 2rem;
//           padding-right: 2.4rem;
//           border: none;
//           cursor: pointer;
//           transition: 0.2s ease-in-out;
//           &:hover {
//             opacity: 0.8;
//           }
//           &:nth-of-type(2) {
//             background-color: rgba(109, 109, 110, 0.7);
//             color: white;
//             svg {
//               font-size: 1.8rem;
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export default Home;




import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Background from "../assets/peakpx.jpeg";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/Slider";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  }, [genresLoaded, dispatch]);

  useEffect(() => {
    // console.log("Movies:", movies); // Add a log to see if movies are fetched correctly
  }, [movies]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img src={Background} alt="background" className="background-image" />
        <div className="container">
          <div className="logo">OPPENHEIMER</div>
          <div className="buttons flex">
            <button
              className="flex j-center a-center"
              onClick={() => navigate("/player")}
            >
              <FaPlay />
              Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        margin-left: 5rem;
        font-size: 6rem;
      }
      .buttons {
        margin-left: 5rem;
        margin-top: 2rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;

export default Home;
