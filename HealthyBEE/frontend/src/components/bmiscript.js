


export default function calculateBMI(e) {
   const h2 = document.querySelector('h2');
    e.preventDefault();
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
      let bmi=  (weight / Math.pow( (height/100), 2 )).toFixed(1);
   if(bmi < 18.5){
       
   h2.textContent = `Your BMI is ${bmi},oops you are underweight`;
   }
   else if( bmi >= 18.5 && bmi <= 24.9 ){
      h2.textContent = `Your BMI is ${bmi},Normal Weight 😍`;
      
   }
     else if( bmi >= 25 && bmi <= 29.9 ){
        h2.textContent = `Your BMI is ${bmi},oops you are Overweight 😮`;
      
    }
   
}