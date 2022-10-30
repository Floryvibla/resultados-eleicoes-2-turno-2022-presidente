import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/confetti2.json';

function Confetti() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

  return (
    <div
        style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            width: "100%",
            height: "100%"
        }}
    >
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  )
}

export default Confetti