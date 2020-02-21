import React, { useState } from 'react';
import axios from 'axios';
import get from 'lodash/get';

import BaseLayout from '../components/layouts/BaseLayout';

export default function Portofolios(props) {
  const [movies, setMovies] = useState([]);
  // const [hover, setHover] = useState(false);

  return (
    <BaseLayout title="My Portfolios">
      <div className="wrapper">
        <div className="container">
          {props.movies.map(movie => {
            return (
              <div className="column" key={movie.show.id}>
                <img
                  className="image"
                  src={get(
                    movie,
                    'show.image.medium',
                    'https://via.placeholder.com/200'
                  )}
                  alt={get(movie, 'show.name', 'movie')}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          width: 100vw;
          padding: 2em;
          padding-top: 5em;
          background-image: linear-gradient(
            to right bottom,
            #2e313b,
            #2a2c35,
            #262730,
            #22232a,
            #1e1e25
          );
        }

        .container {
          display: flex;
          flex-wrap: wrap;
        }

        .column {
          min-width: 33%;
          max-width: 33%;
          padding: 1em;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .image {
          height: 300px;
          width: 100%;
          object-fit: cover;
        }
      `}</style>
    </BaseLayout>
  );
}

Portofolios.getInitialProps = async () => {
  try {
    const res = await axios.get('http://api.tvmaze.com/search/shows?q=batman');
    return { movies: get(res, 'data', []) };
  } catch (err) {
    return { movies: [] };
  }
};
