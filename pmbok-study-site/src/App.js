import './App.css';
import React, { useState } from 'react';
import { data } from './Questions';
// import Button from '@mui/material/Button';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import ErrorRadios from './ButtonQuestion.js';




// function QuestionDisplay(props) {
//   const [displayText, setDisplayText] = useState('');
//   const [displayCorrect, setdisplayCorrect] = useState('???');

//   const handleClick = () => {
//     setDisplayText(props.question.Explanation);
//     setdisplayCorrect(props.question.Correct);
//   };

//   return (
//     <>
//       {props.question.Question}
//       <br />
//       <img src={props.question.img} alt="" />
//       <br />

//       <p> A. <FormControlLabel control={<Checkbox />} label={props.question.A} /></p>
//       <p> B. <FormControlLabel control={<Checkbox />} label={props.question.B} /></p>
//       <p> C. <FormControlLabel control={<Checkbox />} label={props.question.C} /></p>
//       <p> D. <FormControlLabel control={<Checkbox />} label={props.question.D} /></p>

//       <Button onClick={handleClick} variant="outlined">Explanation</Button>
//       <div>
//         {displayText}
//       </div>
//       <br />
//       <br />

//       <Button onClick={() => {
//         if (props.currentQuestion === 0) {
//           props.setCurrentQuestion(data.length - 1)
//         } else {
//           props.setCurrentQuestion(props.currentQuestion - 1);
//         }
//         setDisplayText('');
//         setdisplayCorrect('???')
//       }} variant="outlined">Prev Question</Button>

//       <Button onClick={() => {
//         if (props.currentQuestion === data.length - 1) {
//           props.setCurrentQuestion(0)
//         }
//         else {
//           props.setCurrentQuestion(props.currentQuestion + 1);
//         }
//         setDisplayText('');
//         setdisplayCorrect('???')
//       }} variant="outlined">Next Question</Button>
//     </>
//   );
// }

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <>
      <div>
        <ErrorRadios
          question={data[currentQuestion]}
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
        />
      </div>
    </>
  );
}

export default App;
