import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { data } from './Questions';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';




export default function ErrorRadios(props) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');
  const [displayText, setDisplayText] = useState('');
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState([0, 0, 0, 0])
  const [buttonState, setButtonState] = useState(false)
  const [end, setEnd] = useState(false)

  const handleChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
    if (answer[Number(event.target.value)] === 0) {
      answer[event.target.value] = 1
    } else {
      answer[event.target.value] = 0
    }
  };

  const handleClick = () => {
    setDisplayText(props.question.Explanation);
    setButtonState(true)
    if (value === props.question.Correct) {
      setHelperText('Correct');
      setError(false);
      setScore(score + 1);
    } else {
      setHelperText('Incorrect');
      setError(true);
    }
    if (props.question.Checkbox === true) {
      if (answer.toString() === props.question.Correct.toString()) {
        setHelperText('Correct');
        setError(false);
        setScore(score + 1);
      } else {
        setHelperText('Incorrect');
        setError(true);
      }
    }
    if (props.currentQuestion === data.length - 1) {
      setEnd(true)
    }
  };


  return (
    <form>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="question">{props.question.Question}</FormLabel>
        <img src={props.question.img} height={props.question.height} width={props.question.width} />
        <h2>{score}/{data.length}</h2>
        <QuestionLabels
          question={props.question}
          buttonState={buttonState}
          value={value}
          handleChange={handleChange}
          answer={answer}
        />
        <FormHelperText>{helperText}</FormHelperText>
        <CheckAnswerButton
          handleClick={handleClick}
          buttonState={buttonState} />
      </FormControl>
      <br />
      <div>
        {displayText}
      </div>
      <br />
      <PreviousQuestionButton
        currentQuestion={props.currentQuestion}
        setCurrentQuestion={props.setCurrentQuestion}
        setButtonState={setButtonState}
        setDisplayText={setDisplayText}
        setValue={setValue}
        setHelperText={setHelperText}
        setError={setError}
        setAnswer={setAnswer}
      />

      <NextQuestionButton
        currentQuestion={props.currentQuestion}
        setCurrentQuestion={props.setCurrentQuestion}
        setButtonState={setButtonState}
        setDisplayText={setDisplayText}
        setValue={setValue}
        setHelperText={setHelperText}
        setError={setError}
        setAnswer={setAnswer}
        end = {end}
      />

      <EndScreen
        on={end}
        score={score}
        total={data.length}
      />
    </form>
  );
}

function EndScreen(props) {
  const on = props.on
  if (on === true) {
    return (
      <>
        <h1>You have answered all of the questions</h1>
        <h2>Your score is {props.score}/{props.total}</h2>
      </>
    );
  } else {
    return (
      <></>
    );
  }
}

function CheckAnswerButton(props) {
  return (
    <Button sx={{ mt: 1, mr: 1 }} onClick={props.handleClick} disabled={props.buttonState} type="submit" variant="outlined"> Check Answer </Button>
  );

}

function NextQuestionButton(props) {
  return (
    <Button onClick={() => {
      if (props.currentQuestion === data.length - 1) {
      }
      else {
        props.setCurrentQuestion(props.currentQuestion + 1);
        props.setButtonState(false)
        props.setDisplayText('');
        props.setValue('')
        props.setHelperText(' ');
        props.setError(false);
        props.setAnswer([0, 0, 0, 0])
      }
    
    }} disabled = {props.end} variant="outlined">Next Question</Button>
  );
}

function PreviousQuestionButton(props) {
  return (
    <Button onClick={() => {
      if (props.currentQuestion === 0) {
        props.setCurrentQuestion(data.length - 1)
      } else {
        props.setCurrentQuestion(props.currentQuestion - 1);
      }
      props.setButtonState(false)
      props.setDisplayText('');
      props.setValue('')
      props.setHelperText(' ');
      props.setError(false);
      props.setAnswer([0, 0, 0, 0])
    }} variant="outlined">Prev Question (Dev Tool)</Button>
  );
}

function QuestionLabels(props) {
  if (props.question.Checkbox === true) {
    return (
      <>
        <FormGroup
          aria-labelledby="question"
          name="quiz"
          value={props.answer}
          onChange={props.handleChange}
        >
          <FormControlLabel disabled={props.buttonState} control={<Checkbox value="0" />} label={props.question.A} />
          <FormControlLabel disabled={props.buttonState} control={<Checkbox value="1" />} label={props.question.B} />
          <FormControlLabel disabled={props.buttonState} control={<Checkbox value="2" />} label={props.question.C} />
          <FormControlLabel disabled={props.buttonState} control={<Checkbox value="3" />} label={props.question.D} />
        </FormGroup>
      </>
    );
  } else {
    return (
      <>
        <RadioGroup
          aria-labelledby="question"
          name="quiz"
          value={props.value}
          onChange={props.handleChange}
        >
          <FormControlLabel value="A" disabled={props.buttonState} control={<Radio />} label={props.question.A} />
          <FormControlLabel value="B" disabled={props.buttonState} control={<Radio />} label={props.question.B} />
          <FormControlLabel value="C" disabled={props.buttonState} control={<Radio />} label={props.question.C} />
          <FormControlLabel value="D" disabled={props.buttonState} control={<Radio />} label={props.question.D} />
        </RadioGroup>
      </>
    );
  }
}