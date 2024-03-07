import './App.css';
import React, { useState } from 'react';
import { data } from './Questions';
import Quiz from './ButtonQuestion.js';




function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // Was used for IS 302 AWS EC2 fetching
  // const [testData, setTestData] = useState([])
  // fetch('http://54.196.56.64:5000/data')
  // .then(response => response.json())
  // .then(data =>  setTestData(data))
  return (
    <main>
      {/* Was used for IS 302 AWS EC2 fetching */}
      {/* {testData.map((x) =>
      {
        return(
          <>
          <h1>{x.text}</h1>
          </>
        );

      })} */}
      <test>
        <img src="banner.jpg" alt="banner" height="25%" width="25%" />
      </test>
      <div>
        <Quiz
          question={data[currentQuestion]}
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
        />
      </div>
    </main>
  );
}

export default App;
