import React,{useEffect,useState} from 'react';
import './Products.css';
import sampleImg from '../../assets/sampleImg.jpg'

function Products() {
  const [products,setProducts]=useState()
  
  useEffect(()=>{

    const fetchData = async ()=>{
      
      try {
        const response = await fetch('http://localhost:3000/product/get');
        const data = await response.json();
        
        if (response.ok) {
          setProducts(data.products);
        } else {
          console.error('Error fetching products:', data.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
  },[])
  console.log('your head',products)


  return (
    <div className="products">
      <h2>Fresh recommendations</h2>
      <div className="product-list">
        
       {products && products.length > 0 ? (
          
          products.map((item,index)=>(
            <div key={index} className="OneProduct">
            <img  src={`http://localhost:3000${item.images[0]}`}  alt="Product" />
                <p className="price">₹{item.price}</p>
                <p className="product-name">{item.brand} - {item.km_driven} km</p>
                <p className="product-name">{item.ad_title}</p>
            <div className="location-time">
                <p className="location">{item.state}</p>
               
                <p className="time">3 days ago</p>
            </div>
          </div>

          ))

       ):(
       <p>No products avilable</p>
       )}

          

       
      </div>
    </div>
  );
}

export default Products;