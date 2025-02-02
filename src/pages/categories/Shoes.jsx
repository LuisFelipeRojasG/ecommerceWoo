
import  { useEffect } from 'react';

function Shoes() {

    useEffect(() => {
        // This code will run once when the component mounts
        fetch('https://api.escuelajs.co/api/v1/categories/4/products')
            .then(response => console.log(response.json()))
            //.then(data => setData(data))
    }, []); // Empty dependency array means this effect runs once



    return (
        <div>
            <h1>Shoes Category</h1>
            <p>Welcome to the Shoes category page!</p>
        </div>
    );
}

export default Shoes;