import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";


function App() {
  const[sushis, setSushis] = useState([])
  const[index, setIndex] = useState(0)
  const[wallet, setWallet] = useState(100)
  
  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      const updatedSushis = sushis.map((sushi) => {
        return {...sushi, eaten: false};
      })
      setSushis(updatedSushis)
    })
    
  }, [])

  const displaySushis = sushis.slice(index, index+4)
  const eatenSushis = sushis.filter((s) => {
    return s.eaten === true 
  })
  
  function handleMoreSushi(){
    setIndex((index) => (index+4))
  }
  //console.log(index)

  function handleEatSushi(sushi){
  
    const updatedSushis = sushis.map((s) => {
      if(s.id === sushi.id && wallet >= s.price) {
        setWallet((wallet) =>  wallet - s.price )
        return {...s, eaten:true}
      }
      else {
        return s 
      }
    })
    setSushis(updatedSushis)
  } 

  

  return (
    <div className="app">
      <SushiContainer sushis={displaySushis} handleEatSushi={handleEatSushi} handleMoreSushi={handleMoreSushi} />
      <Table wallet={wallet} plates={eatenSushis} />
    </div>
  );
}

export default App;
