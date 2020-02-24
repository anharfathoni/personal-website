export default function Card(props) {
  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>
        <div className="card">
          <div className="front">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/610J%2B%2BQBxXL._AC_SL1500_.jpg"
              alt="gundam"
              className="image"
            />
          </div>
          <div className="back">
            <div className="detail">
              <h2>Title here</h2>
              <button type="button" className="button">
                <p>View</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        h2 {
          color: #ffffff;
        }
        // p {
        //   margin: 0;
        //   padding: 0;
        // }
        .card {
          // top: 50%;
          // width: 300px;
          height: 400px;
          width: 100%;
          // height: 100%;
          transform-style: preserve-3d;
          // perspective: 600px;
          -webkit-box-shadow: 0 0 5px #000;
          box-shadow: 0 0 5px #000;
          border-radius: 10px;
          overflow: hidden;
          margin: 1em;
        }
        .image {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          object-fit: cover;
        }
        .front {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .card .back {
          // position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgb(27, 27, 27);
          opacity: 0;
        }

        .card .back .detail {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateY(50%);
        }

        .card:hover .back {
          background: rgb(27, 27, 27);
          opacity: 0.9;
        }

        .card:hover .back .detail {
          transition: 0.5s;
          transform: translateY(0);
        }

        .button {
          width: 20%;
          width: 100px;
          padding: 0.5em 2em 0em 2em;
          background-color: rgb(175, 119, 119);
          color: #ffffff;
          border-radius: 5px;
          // display: flex;
          // justify-content: center;
          // align-items: center;
          
        }

        .button:hover {
          background-color: rgb(150, 49, 49);
          cursor: pointer;
        }

        .card:hover .button {
          width: 40%;
          transition: 1s;
          // display: flex;
          // justify-content: center;
          // align-items: center;
        }
      `}</style>
    </>
  );
}
