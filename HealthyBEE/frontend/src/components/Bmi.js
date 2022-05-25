import React from 'react'
import '../css/blog.css'
import '../css/bmi.css'
import calculateBMI from './bmiscript'


const Bmi = () => {
  return (
       <div>
               <div className="bg"></div>
<div className="bg bg2"></div>
     <div class="container flex-row center">
        <div class="calculator">
            <form class=" flex-col">
                <h2 class="form-item">Your BMI is </h2>
                <input class="form-item mt-auto" type="number" id="weight" name="weight" placeholder="Enter your weight in kilograms" />
                <input class="form-item mt-auto " type="number" id="height" name="height" placeholder="Enter your height in metres" />
                <button class="form-item mt-auto " id="btn" type="submit" onClick={calculateBMI}> Check</button>
            </form>
        </div>
    </div>
       </div>
   

  )
}

export default Bmi