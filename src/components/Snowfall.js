import React from 'react';

const Snowfall = ({ isEnabled = false }) => {
  // Create an array of 12 snowflakes
  const snowflakes = Array.from({ length: 12 }, (_, i) => i);

  if (!isEnabled) return null;
  
  return (
    <>
      <style>
        {`
          .snowflake {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.2em;
            font-family: Arial, sans-serif;
            text-shadow: 0 0 5px rgba(255, 153, 170, 0.5);
          }

          .snowflake,.snowflake .inner{
            animation-iteration-count:infinite;
            animation-play-state:running
          }
          
          @keyframes snowflakes-fall{
            0%{transform:translateY(0)}
            100%{transform:translateY(110vh)}
          }
          
          @keyframes snowflakes-shake{
            0%,100%{transform:translateX(0)}
            50%{transform:translateX(80px)}
          }
          
          .snowflake{
            position:fixed;
            top:-10%;
            z-index:99999;
            user-select:none;
            cursor:default;
            pointer-events:none;
            animation-name:snowflakes-shake;
            animation-duration:3s;
            animation-timing-function:ease-in-out
          }
          
          .snowflake .inner{
            animation-duration:8s;
            animation-name:snowflakes-fall;
            animation-timing-function:linear
          }
          
          .snowflake:nth-of-type(0){left:1%;animation-delay:0s}
          .snowflake:nth-of-type(0) .inner{animation-delay:0s}
          .snowflake:first-of-type{left:10%;animation-delay:1s}
          .snowflake:first-of-type .inner,.snowflake:nth-of-type(8) .inner{animation-delay:1s}
          .snowflake:nth-of-type(2){left:20%;animation-delay:.5s}
          .snowflake:nth-of-type(2) .inner,.snowflake:nth-of-type(6) .inner{animation-delay:6s}
          .snowflake:nth-of-type(3){left:30%;animation-delay:2s}
          .snowflake:nth-of-type(11) .inner,.snowflake:nth-of-type(3) .inner{animation-delay:4s}
          .snowflake:nth-of-type(4){left:40%;animation-delay:2s}
          .snowflake:nth-of-type(10) .inner,.snowflake:nth-of-type(4) .inner{animation-delay:2s}
          .snowflake:nth-of-type(5){left:50%;animation-delay:3s}
          .snowflake:nth-of-type(5) .inner{animation-delay:8s}
          .snowflake:nth-of-type(6){left:60%;animation-delay:2s}
          .snowflake:nth-of-type(7){left:70%;animation-delay:1s}
          .snowflake:nth-of-type(7) .inner{animation-delay:2.5s}
          .snowflake:nth-of-type(8){left:80%;animation-delay:0s}
          .snowflake:nth-of-type(9){left:90%;animation-delay:1.5s}
          .snowflake:nth-of-type(9) .inner{animation-delay:3s}
          .snowflake:nth-of-type(10){left:25%;animation-delay:0s}
          .snowflake:nth-of-type(11){left:65%;animation-delay:2.5s}
        `}
      </style>
      <div className="snowflakes" aria-hidden="true">
        {snowflakes.map((_, index) => (
          <div key={index} className="snowflake">
            <div className="inner">❅</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Snowfall;
