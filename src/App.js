import React, {useState,useEffect} from "react";
import Cards from './Cards'
import './styles/App.css'
import uniqid from 'uniqid';



function App() {
    let mappedJSX; 
    const [highScore, setHighScore] = useState(0);
    const [characterList, setCharacterList] = useState([]);
    const [picks, setPicks] = useState([]);


    useEffect(()=>{
      fetch('https://api.giphy.com/v1/gifs/search?api_key=sie8Ps0BAnPHWypSTu6B56eGeGS2Nkyz&q=dog&limit=12&offset=0&rating=g&lang=en')
        .then(response =>{
          if(response.ok){
            return response.json();
          }
        })
        .then(response =>{
          console.log(response.data);
          let images = response.data.map((pic)=>(
            {
              id: pic.id,
              image: pic.images.original.url,
              text: pic.title,
              name: uniqid(),
              key: pic.slug,
            }
            
          ))
          setCharacterList(images);
        })
    },[])

      const addToPick = (e) =>{
        const name = e.target.name
        let flag = false; 
        picks.forEach((pick)=>{
          if(name ===pick){
            flag = true; 
          }
        })
        if(flag === false){
          setPicks([...picks, name])
        }
        if(flag === true){
          resetGame();
        }
      }

      const shuffleArray =(array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
      }

      const upDateHighScore = () =>{
        if(picks.length >= highScore){
          setHighScore(picks.length);
        }
      }

      const checkWin = () =>{
        if(picks.length >= characterList.length){
          return true;
        } 
        return(false);
      }
      const resetGame = () =>{
        setPicks([]);

      }

      useEffect(()=>{
        const picksArr = characterList
        shuffleArray(picksArr)
        upDateHighScore();


      },[characterList, picks,highScore])

      
      return (
        <div key={uniqid()} className="app-container">
          <h1 key={uniqid()}> Memory Game!</h1>
          <span key={uniqid()}>High Score: {highScore}</span>
          <span key={uniqid()}>Current Score: {picks.length}</span>
          
        <div className="card-container">
          {characterList.map((char)=>{
            return(
              <Cards keyProp={uniqid()} click={addToPick} nameProp={char.name}text={char.title} source={char.image} />
              );
            })}
        </div>

        </div>
  );
}

export default App;
