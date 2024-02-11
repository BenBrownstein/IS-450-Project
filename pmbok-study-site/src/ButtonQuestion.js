import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { data } from './Questions';


export default function ErrorRadios(props) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');
  const [displayText, setDisplayText] = useState('');
  const [displayCorrect, setdisplayCorrect] = useState('???');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleClick = () => {
    setDisplayText(props.question.Explanation);
    setdisplayCorrect(props.question.Correct);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === props.question.Correct) {
      setHelperText('Correct');
      setError(false);
    } else {
      setHelperText('Incorrect');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="question">{props.question.Question}</FormLabel>
        <img src={props.question.img} alt="" />
        <RadioGroup
          aria-labelledby="question"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="A" control={<Radio />} label={props.question.A} />
          <FormControlLabel value="B" control={<Radio />} label={props.question.B} />
          <FormControlLabel value="C" control={<Radio />} label={props.question.C} />
          <FormControlLabel value="D" control={<Radio />} label={props.question.D}/>
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
      <br />
      <Button onClick={handleClick} variant="outlined">Explanation</Button>
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
        setDisplayText('');
        setdisplayCorrect('???')
        setValue('')
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
        setValue('')
      }} variant="outlined">Next Question</Button>
    </form>
    
  );
}