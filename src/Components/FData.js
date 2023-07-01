import React, { useEffect, useState } from "react";
import axios from "axios";

const FData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/");
        setData(Object.values(response.data.products));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="data">
    <div className="heading">
  <h1 >All Items</h1>
</div>
    <div className="items">
    {data.map((item) => (
        <div key={item.id} className="one">
        <img src={item.images[0]}
            alt="Product Imge"
          />
         <div className="two"> <h4 className="title">{item.title}</h4>
          <p>Category: {item.category}</p>
          <p>Price: {item.price}</p>
         <footer> <button className="btn">Add to Cart</button></footer></div>
        </div>
      ))}
    </div></div>
  );
};

export default FData;
