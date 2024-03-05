import './App.css';
import React, { useState } from 'react';
import { data } from './Questions';
import ErrorRadios from './ButtonQuestion.js';




function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [testData, setTestData] = useState([])
  // fetch('http://3.93.67.170:5000/data')
  // .then(response => response.json())
  // .then(data =>  setTestData(data))
  return (
    <main>
      {/* {testData.map((x) =>
      {
        return(
          <>
          <h1>{x.data}</h1>
          </>
        );

      })} */}
      <test>
        <img src="banner.jpg" alt="banner" height="25%" width="25%" />
      </test>
      <div>
        <ErrorRadios
          question={data[currentQuestion]}
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
        />
      </div>
    </main>
  );
}

export default App;
