import  { useEffect, useState } from 'react'

function Clothes() {

  useEffect(() => {
        // This code will run once when the component mounts
        fetch('https://api.escuelajs.co/api/v1/categories/1/products')
            .then(response => console.log(response.json()))
            //.then(data => setData(data))
    }, []); // Empty dependency array means this effect runs once


  return (
    <div>Clothes</div>
  )
}

export default Clothes