
import  { useEffect } from 'react';

function Forniture() {

  useEffect(() => {
    // This code will run once when the component mounts
    fetch('https://api.escuelajs.co/api/v1/categories/3/products')
        .then(response => console.log(response.json()))
        //.then(data => setData(data))
}, []); // Empty dependency array means this effect runs once



    return (
      <div>Forniture</div>
    )
  }
  
  export default Forniture