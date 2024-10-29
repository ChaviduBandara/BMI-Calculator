import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form>
          <div>
            <label>Weight (kg)</label>
            <input type='text' placeholder='Enter the weight' value={weight}/>
          </div>
          <div>
            <label>Height (cm)</label>
            <input type='text' placeholder='Enter the height' value={height}/>
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
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
