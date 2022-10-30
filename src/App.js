import './App.css';
import Header from './components/header';
import Card from './components/Cards';
import { useEffect, useState } from 'react';
import { getBaseUrl } from './config/http';
import axios from 'axios';
import ResultPresident from './components/Cards/ResultPresident';
import Confetti from './components/Confetti';

function App() {

  const [data, setData] = useState(false)
  const [uf, setUf] = useState("br")

  const url = getBaseUrl(uf)
  // voteCounting == "100" 

  const gerResultsVote = () => {
    axios.get("https://afternoon-retreat-54631.herokuapp.com/api").then(res => setData(res.data)).catch(err => console.log(err))
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
              <div className='App-wrapper'>
                {data?.psi.split(",")[0] == "100" && <Confetti />}
                <ResultPresident voteCounting={data?.psi.split(",")[0]} percent={{
                  lula: data?.cand.filter(i => i.nm === "LULA")[0]?.pvap,
                  bolsonaro: data?.cand.filter(i => i.nm === "JAIR BOLSONARO")[0]?.pvap
                }} />
              </div>
          </>
        }
      </div>
    </div>
  );
}

export default App;
