
import  { useEffect } from 'react';

function Miscellaneous() {

  useEffect(() => {
    // This code will run once when the component mounts
    fetch('https://api.escuelajs.co/api/v1/categories/5/products')
        .then(response => console.log(response.json()))
        //.then(data => setData(data))
}, []); // Empty dependency array means this effect runs once



  return (
    <div>
      <h1>Miscellaneous</h1>
    </div>
  );
}

export default Miscellaneous;