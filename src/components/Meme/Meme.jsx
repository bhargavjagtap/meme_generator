import React from 'react'
import memeData from '../../memeData.js'

const Meme = () => {
    const [memeImage, setMemeImage] = React.useState("")

    async function getMemeImage(){
        const memesArray = memeData.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        await setMemeImage(memesArray[randomNum].url)
    }

    // useEffect(() => {
    //   getMemeImage()
    // }, [])

    return (

      
        <div className="form-group p-5">
          <input className="form-control" placeholder="Top Text" />
          <input className="form-control mt-4" placeholder="Bottom Text" />

          <button
            className="btn btn-primary mt-3 ml-auto"
            onClick={()=>getMemeImage()}
          >
            Get a new meme image
          </button>
        <img className="image" height="200" src={memeImage} alt="img"/>  
        </div>
      
    );
}


export default Meme
