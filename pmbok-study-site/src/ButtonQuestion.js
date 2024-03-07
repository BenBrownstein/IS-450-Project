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




export default function Quiz(props) {
  // State variable that controls the answer for the multiple choice questions
  const [value, setValue] = React.useState('');
  // State variable that has if the answer is wrong or not
  const [error, setError] = React.useState(false);
  // State variable that contols if Correct or Incorrect is displayed
  const [helperText, setHelperText] = React.useState('');
  // State variable for the explanation of the answer for a given question
  const [displayText, setDisplayText] = useState('');
  // State variable that controls the users score
  const [score, setScore] = useState(0);
  // State variable that controls the answer for multiple answer questions
  const [answer, setAnswer] = useState([0, 0, 0, 0])
  // State variable that controls if buttons are disabled or not
  const [buttonState, setButtonState] = useState(false)
  // State variable that controls if the end screen is visible
  const [end, setEnd] = useState(false)

  // This constant will be used when a checkbox or radio button is clicked to set value or answer to what value is stored in that button or checkbox
  const handleChange = (event) => {
    setHelperText(' ');
    setError(false);
    // This is for radio buttons
    setValue(event.target.value);
    // This is for checkboxes

    if (answer[Number(event.target.value)] === 0) {
      answer[event.target.value] = 1
    } else {
      answer[event.target.value] = 0
    }
  };

  // This constant will check if the selected value or answer is correct
  const handleClick = () => {
    setDisplayText(props.question.Explanation);
    setButtonState(true)
    // This is for radio buttons
    if (value === props.question.Correct) {
      setHelperText('Correct');
      setError(false);
      setScore(score + 1);
    } else {
      setHelperText('Incorrect');
      setError(true);
    }
    // This is for checkboxes
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
    // If the current question is the last question it will display the end screen
    if (props.currentQuestion === data.length - 1) {
      setEnd(true)
    }
  };


  return (
    <form>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        {/* Displays the question from the JSON */}
        <FormLabel id="question">{props.question.Question}</FormLabel>
        {/* Shows the image if any for the question and sets the height and width based on what is given in the JSON */}
        <img src={props.question.img} height={props.question.height} width={props.question.width} />
        {/* Shows the number of questions the user got correct out of the total amount of questions the app has */}
        <h2>{score}/{data.length}</h2>
        {/* This displays the questions for the quiz using either radio buttons for multiple choice or checkboxes for multiple answer questions */}
        <QuestionLabels
          question={props.question}
          buttonState={buttonState}
          value={value}
          handleChange={handleChange}
          answer={answer}
        />
        <FormHelperText>{helperText}</FormHelperText>
        {/* This button checks to see if the answer is right, is disabled after being clicked, and shows the explanation on why the correct answer is correct*/}
        <CheckAnswerButton
          handleClick={handleClick}
          buttonState={buttonState} />
      </FormControl>
      <br />
      {/* This is Where the explanation text is displayed from */}
      <div>{displayText}</div>
      <br />
      {/* Commented out as it is a good tool for testing but I do not want users to use it as it breaks the scoring */}
      {/* Goes to the previous question and resets all of the state varaibles that are for questions */}
      {/* <PreviousQuestionButton
        currentQuestion={props.currentQuestion}
        setCurrentQuestion={props.setCurrentQuestion}
        setButtonState={setButtonState}
        setDisplayText={setDisplayText}
        setValue={setValue}
        setHelperText={setHelperText}
        setError={setError}
        setAnswer={setAnswer}
      /> */}

      {/* Goes to the next question and resets all of the state varaibles that are for questions */}
      <NextQuestionButton
        currentQuestion={props.currentQuestion}
        setCurrentQuestion={props.setCurrentQuestion}
        setButtonState={setButtonState}
        setDisplayText={setDisplayText}
        setValue={setValue}
        setHelperText={setHelperText}
        setError={setError}
        setAnswer={setAnswer}
        end={end}
      />

      {/* Displays an End Screen at the bottom of the page after the last question is answered */}
      <EndScreen
        on={end}
        score={score}
        total={data.length}
      />
    </form>
  );
}

// Function to display the end screen if the end state variable is set to true
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

// Function for the check answer button
function CheckAnswerButton(props) {
  return (
    <Button sx={{ mt: 1, mr: 1 }} onClick={props.handleClick} disabled={props.buttonState} type="submit" variant="outlined"> Check Answer </Button>
  );

}

// Function for the next question button
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

    }} disabled={props.end} variant="outlined">Next Question</Button>
  );
}

// Function for the previous question button
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

// Function that displays the possible answers 
function QuestionLabels(props) {
  // Checks if the question is multiple answer
  if (props.question.Checkbox === true) {
    return (
      <>
        {/*Checkboxes that pull the their contents from the JSON */}
        <FormGroup
          aria-labelledby="question"
          name="quiz"
          value={props.answer}
          onChange={props.handleChange}>
          <FormControlLabel value="0" disabled={props.buttonState} control={<Checkbox />} label={props.question.A} />
          <FormControlLabel value="1" disabled={props.buttonState} control={<Checkbox />} label={props.question.B} />
          <FormControlLabel value="2" disabled={props.buttonState} control={<Checkbox />} label={props.question.C} />
          <FormControlLabel value="3" disabled={props.buttonState} control={<Checkbox />} label={props.question.D} />
        </FormGroup>
      </>
    );
  } else {
    // If not multiple answer then displays radio buttons
    return (
      <>
        {/*Radio Buttons that pull the their contents from the JSON */}
        <RadioGroup
          aria-labelledby="question"
          name="quiz"
          value={props.value}
          onChange={props.handleChange}>
          <FormControlLabel value="A" disabled={props.buttonState} control={<Radio />} label={props.question.A} />
          <FormControlLabel value="B" disabled={props.buttonState} control={<Radio />} label={props.question.B} />
          <FormControlLabel value="C" disabled={props.buttonState} control={<Radio />} label={props.question.C} />
          <FormControlLabel value="D" disabled={props.buttonState} control={<Radio />} label={props.question.D} />
        </RadioGroup>
      </>
    );
  }
}