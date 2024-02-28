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

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleCheckChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleClick = () => {
    setDisplayText(props.question.Explanation);
    setButtonState(true)
    console.log(value)
    if (value === props.question.Correct) {
      setHelperText('Correct');
      setError(false);
      setScore(score + 1);
    } else {
      setHelperText('Incorrect');
      setError(true);
    }
    if (props.currentQuestion === data.length - 1) {
      setEnd(true)
    }
  };

  if (props.question.Checkbox === true) {
    return (
      <form>
        <FormControl sx={{ m: 3 }} error={error} variant="standard">
          <FormLabel id="question">{props.question.Question}</FormLabel>
          <img src={props.question.img} alt="" />
          <h2>{score}</h2>
          <FormGroup
            aria-labelledby="question"
            name="quiz"
            value={value}
            onChange={handleCheckChange}
          >

            <FormControlLabel control={<Checkbox value="A" />} label={props.question.A} />
            <FormControlLabel control={<Checkbox value="B" />} label={props.question.B} />
            <FormControlLabel control={<Checkbox value="C" />} label={props.question.C} />
            <FormControlLabel control={<Checkbox value="D" />} label={props.question.D} />
          </FormGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button sx={{ mt: 1, mr: 1 }} onClick={handleClick} disabled={buttonState} type="submit" variant="outlined">
            Check Answer
          </Button>
        </FormControl>
        <br />
        <div>
          {displayText}
        </div>
        <br />
        <Button onClick={() => {
          if (props.currentQuestion === 0) {
            props.setCurrentQuestion(data.length - 1)
          } else {
            props.setCurrentQuestion(props.currentQuestion - 1);
          }
          setButtonState(false)
          setDisplayText('');
          setValue('')
        }} variant="outlined">Prev Question</Button>

        <Button onClick={() => {
          if (props.currentQuestion === data.length - 1) {
            props.setCurrentQuestion(0)
          }
          else {
            props.setCurrentQuestion(props.currentQuestion + 1);
          }
          setButtonState(false)
          setDisplayText('');
          setValue('')
        }} variant="outlined">Next Question</Button>
      </form>
    );
  } else {
    return (
      <form>
        <FormControl sx={{ m: 3 }} error={error} variant="standard">
          <FormLabel id="question">{props.question.Question}</FormLabel>
          <img src={props.question.img} alt="" />
          <h2>{score}/{data.length}</h2>
          <RadioGroup
            aria-labelledby="question"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="A" disabled={buttonState} control={<Radio />} label={props.question.A} />
            <FormControlLabel value="B" disabled={buttonState} control={<Radio />} label={props.question.B} />
            <FormControlLabel value="C" disabled={buttonState} control={<Radio />} label={props.question.C} />
            <FormControlLabel value="D" disabled={buttonState} control={<Radio />} label={props.question.D} />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button sx={{ mt: 1, mr: 1 }} onClick={handleClick} disabled={buttonState} type="submit" variant="outlined">
            Check Answer
          </Button>
        </FormControl>
        <div>
          {displayText}
        </div>
        <br />
        <Button onClick={() => {
          if (props.currentQuestion === 0) {
            props.setCurrentQuestion(data.length - 1)
          } else {
            props.setCurrentQuestion(props.currentQuestion - 1);
          }
          setButtonState(false)
          setDisplayText('');
          setValue('')
          setHelperText(' ');
          setError(false);
        }} variant="outlined">Prev Question (Dev Tool)</Button>

        <Button onClick={() => {
          if (props.currentQuestion === data.length - 1) {
          }
          else {
            props.setCurrentQuestion(props.currentQuestion + 1);
            setButtonState(false)
            setDisplayText('');
            setValue('')
            setHelperText(' ');
            setError(false);
          }

        }} variant="outlined">Next Question</Button>
        <EndScreen
          on={end}
          score={score}
          total={data.length}
        />
      </form>

    );
  }
}

function EndScreen(props) {
  const on = props.on
  if (on == true) {
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


