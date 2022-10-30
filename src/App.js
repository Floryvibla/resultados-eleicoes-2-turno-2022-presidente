import './App.css';
import Header from './components/header';
import Card from './components/Cards';
import { useEffect, useRef, useState } from 'react';
import { toBlob } from "html-to-image";
import { getBaseUrl } from './config/http';
import axios from 'axios';
import ResultPresident from './components/Cards/ResultPresident';
import Confetti from './components/Confetti';

function App() {

  const [data, setData] = useState(false)
  const [uf, setUf] = useState("br")

  const imageRef = useRef(null);

  const url = getBaseUrl(uf)
  // voteCounting == "100" 

  const gerResultsVote = () => {
    axios.get("https://afternoon-retreat-54631.herokuapp.com/api").then(res => setData(res.data)).catch(err => console.log(err))
  }

  const handleShare = async () => {
    const newFile = await toBlob(imageRef.current);
    const data = {
      files: [
        new File([newFile], 'vote-presidente.png', {
          type: newFile.type,
        }),
      ],
      title: 'vote-presidente',
      text: 'vote-presidente',
    };

    try {
      if (!navigator.canShare(data)) {
        console.error("Não é possível compartilhar");
      }
      await navigator.share(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    gerResultsVote()
  }, [data])
  
  // console.log(data);

  return (
    <div className="App">
      <Header  />
      <div className='App-contain'>
        {!data ? "Carregando..."
          : <>
              <div className='App-wrapper'>
                <Card date={data?.dg} time={data?.hg} voteCounting={data?.psi} type={"apuração"} />
              </div>
              <div ref={imageRef} className='App-wrapper'>
                <Confetti />
                <ResultPresident voteCounting={"100"} percent={{
                  lula: data?.cand.filter(i => i.nm === "LULA")[0]?.pvap,
                  bolsonaro: data?.cand.filter(i => i.nm === "JAIR BOLSONARO")[0]?.pvap
                }} />
              </div>
          </>
        }
        <div 
          onClick={handleShare}
          style={{padding: "10px 50px", backgroundColor: "#2a0657b1", color: "#fff", borderRadius: 10, cursor: "pointer", zIndex: 50}}
        >
          Compartilhar
        </div>
      </div>
    </div>
  );
}

export default App;
