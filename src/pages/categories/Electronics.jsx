
import { useEffect } from 'react';

function Electronics() {

  useEffect(() => {
    // This code will run once when the component mounts
    fetch('https://api.escuelajs.co/api/v1/categories/2/products')
        .then(response => console.log(response.json()))
        //.then(data => setData(data))
  }, []); // Empty dependency array means this effect runs once



  return (
    <div>Electronics</div>
  )
}

export default Electronics