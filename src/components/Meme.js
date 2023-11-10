import React, {useState} from 'react'
import memesData from '../memesData'

const Meme = () => {

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }) 


    function getMemeImage() {
        const memeDetails = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memeDetails.length);
        const url = memeDetails[randomNumber].url
        setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: url,
            })
        )
    }



    return (

        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>

            <div className="meme">
              <img src={meme.randomImage} alt="meme" className="meme_image" />
              <h2 className="meme--text top">{meme.topText}</h2>
              <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme
