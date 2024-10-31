import './App.css';
import React from 'react';
import {useState} from 'react';


function App() {

  const[weight, setWeight] = useState(0);
  const[height, setHeight] = useState(0);
  const[bmi, setBmi] = useState('');
  const[message, setMessage] = useState('');


  const handleWeightChange = (event) => {
    setWeight(event.target.value)
  } 

  const handleHeightChange = (event) => {
    setHeight(event.target.value)
  }

  const calBmi = (event) => {
    if(weight === 0 || height === 0){
      alert('Please enter a valid weight and height');
    }

    else{
      let bmi = (weight / (height*height)*703);
      setBmi(bmi.toFixed(1));  // rounded to one decimal point

      if(bmi<25){
        setMessage('You are under-weight!');
      }
      else if(bmi>=25 && bmi<30){
        setMessage('You are a healthy weight!');
      }

      else{
        setMessage('You are over-Weight!');
      }
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (kg)</label>
            <input 
              type='text' 
              placeholder='Enter the weight' 
              value={weight}
              onChange={handleWeightChange}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input 
              type='text' 
              placeholder='Enter the height' 
              value={height}
              onChange={handleHeightChange}
            />
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            {/* <button className='btn btn-outline' onChange={reload} type='submit'>Reload</button> */}
          </div>

          <div className='center'>
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
