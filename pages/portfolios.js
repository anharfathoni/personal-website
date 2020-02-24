import React, { useState } from 'react';
import axios from 'axios';
import get from 'lodash/get';

import BaseLayout from '../components/layouts/BaseLayout';

export default function Portofolios(props) {

  return (
    <BaseLayout title="My Portfolios">
      <div className="wrapper">
        <div className="container">
          {props.movies.map(movie => {
            return (
              <div
                className="column"
                key={movie.show.id}
                style={{
                  backgroundImage: `url(${get(
                    movie,
                    'show.image.medium',
                    'https://via.placeholder.com/200'
                  )})`,
                  backgroundSize: 'cover'
                }}
              >
                <div className="back">
                  <div className="detail">
                    <h4>{get(movie, 'show.name', 'movie')}</h4>
                    <button type="button" className="button">
                      <p>View</p>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        p {
          margin: 0;
          padding: 0;
        }

        h4 {
          color: #ffffff;
          text-align: center;
        }

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
          min-width: 30%;
          max-width: 30%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin: 1em;
          height: 300px;
          box-shadow: 0 0 10px #ffffff;
        }

        .back {
          width: 100%;
          height: inherit;
          background: #55bdc3;
          opacity: 0;
        }

        .detail {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateY(100px);
        }

        .column:hover .back {
          background: #55bdc3;
          opacity: 0.95;
        }

        .column:hover .detail {
          transform: translateY(0px);
          transition: 0.5s;
        }

        .button {
          width: 40%;
          padding: 0.5em 2em 0.5em 2em;
          background-color: #ffffff;
          color: #55bdc3;
          border-radius: 5px;
        }

        .button:hover {
          background-color: #262730;
          color: #ffffff;
          cursor: pointer;
        }
      `}</style>
    </BaseLayout>
  );
}

Portofolios.getInitialProps = async () => {
  try {
    const res = await axios.get('http://api.tvmaze.com/search/shows?q=isekai');
    return { movies: get(res, 'data', []) };
  } catch (err) {
    return { movies: [] };
  }
};
