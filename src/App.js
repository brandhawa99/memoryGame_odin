import React, {useState,useEffect} from "react";
import Cards from './Cards'


function App() {

    const [highScore, setHighScore] = useState(0);
    const [characterList, setCharacterList] = useState([{img:"http://cdn.akc.org/content/article-body-image/keeshond_dog_pictures.jpg",
                                                          title :'How YOU doin’?'
    },]);
    const [picks, setPicks] = useState([]);


    /**
     * TODO: useEffect(()=>{},[picks])
     * everytime you get a new pick you the order of the characters changes 
     * 
     */
    // async function getImages(){
    //   const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=sie8Ps0BAnPHWypSTu6B56eGeGS2Nkyz&limit=10&rating=g')
    //   const json = await response.json();
    //   setCharacterList(json.data)
    // }

    // useEffect(()=>{
    //   fetch('https://api.giphy.com/v1/gifs/trending?api_key=sie8Ps0BAnPHWypSTu6B56eGeGS2Nkyz&limit=10&rating=g')
    //     .then(response =>{
    //       if(response.ok){
    //         return response.json();

    //       }
    //     })
    //     .then(response =>{
    //        setCharacterList(response.data);
    //     })
    // },[])
      
      return (
        <div className="App">
      <h1> Hello World!</h1>
        <Cards text={characterList[0].title} source={characterList[0].img} />
      
    </div>
  );
}

export default App;
