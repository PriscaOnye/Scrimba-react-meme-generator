const peopleElememnt = peopleDetails.map(person => {
    return (
        <Card 
            key = {person.ID}
            personsCard = {person}
        />
    )
  })

const memeURLs = memesData.data.memes.map(meme => meme.url);
console.log(memeURLs);


import React, {useState} from "react";

const questionAnswer: [
    {question: "Question 1", answer: "Answer 1"},
    {question: "Question 2", answer: "Answer 2"},
    {question: "Question 3", answer: "Answer 3"},
    {question: "Question 4", answer: "Answer 4"}
];

export const FlashCards = ({questionAnswer}) => {
    
    const [randomNumber, setRandomNumber] = useState(0)
    
    const flipDisplay = () => {
        // Logic flip display here.
    }
    
    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * questionAnswer.length);
        setRandomNumber(randomNumber)
    }

    return (
        <div className='ui container'>
            <div id='question'>
                {questionAnswer[randomNumber].question}
            </div>
            <div id='answer' style={{display: 'none'}}>
                {questionAnswer[randomNumber].answer}
            </div>
            <div>
                <button className='ui button' onClick={flipDisplay}>Flip</button>
                <button className='ui button' onClick={generateRandomNumber}>Next</button>
            </div>
        </div>
    )
}





  const memeDetails = memesData.data.memes;
  const [randomMeme, setRandomMeme] = useState(null);

  const generateRandomMeme = () => {
    const randomNumber = Math.floor(Math.random() * memeDetails.length);
    setRandomMeme(memeDetails[randomNumber]);
  };

  function handleClick() {
    generateRandomMeme();
  }

//////////////////
  const memeDetails = memesData.data.memes;

  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * memeDetails.length);
    setRandomNumber(randomNumber);
  }

  function handleClick() {
    generateRandomNumber();
    const randomMeme = memeDetails[randomNumber];
    console.log(randomMeme.url);
  }








Challenge: Update our state to save the meme-related
data as an object called `meme`. It should have the
following 3 properties:
topText, bottomText, randomImage.

The 2 text states can default to empty strings for now,
amd randomImage should default to "http://i.imgflip.com/1bij.jpg"

Next, create a new state variable called `allMemeImages`
which will default to `memesData`, which we imported above

Lastly, update the `getMemeImage` function and the markup 
to reflect our newly reformed state object and array in the
correct way.
