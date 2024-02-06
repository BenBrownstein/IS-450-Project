import './App.css';
import React, { useState } from 'react';
import { data } from './Questions';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';




function QuestionDisplay(props) {
  const [displayText, setDisplayText] = useState('');
  const [displayCorrect, setdisplayCorrect] = useState('???');


  const handleClick = () => {
    setDisplayText(props.question.Explanation);
    setdisplayCorrect(props.question.Correct);
  };

  return (
    <>
      {props.question.Question}
      <br />
      <p> A. <FormControlLabel control={<Checkbox />} label={props.question.A} /></p>
      <p> B. <FormControlLabel control={<Checkbox />} label={props.question.B} /></p>
      <p> C. <FormControlLabel control={<Checkbox />} label={props.question.C} /></p>
      <p> D. <FormControlLabel control={<Checkbox />} label={props.question.D} /></p>

      <div>
        <Button onClick={handleClick} variant="outlined">Explanation</Button>
        <div>
          <p>The correct answer is {displayCorrect}</p>
          {displayText}
        </div>
      </div>
      <br />
      <br />
      <Button onClick={() => {
        if (props.currentQuestion === 0) {
          props.setCurrentQuestion(data.length - 1)
        } else {
          props.setCurrentQuestion(props.currentQuestion - 1);
        }
        setDisplayText('');
        setdisplayCorrect('???')
      }} variant="outlined">Prev Question</Button>
      <Button onClick={() => {
        if (props.currentQuestion === data.length - 1) {
          props.setCurrentQuestion(0)
        }
        else {
          props.setCurrentQuestion(props.currentQuestion + 1);
        }
        setDisplayText('');
        setdisplayCorrect('???')
      }} variant="outlined">Next Question</Button>
    </>
  );
}

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <QuestionDisplay
            question={data[currentQuestion]}
            setCurrentQuestion={setCurrentQuestion}
            currentQuestion={currentQuestion}
          />
        </header>
      </div>
    </>
  );
}

export default App;
