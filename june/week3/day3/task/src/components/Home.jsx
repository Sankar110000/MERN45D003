import React from "react";
import Card from "./Card";

function Home({theme, setTheme}) {
  const products = [
    {
      title: "MacBook M2",
      description: "As fast as Cycle",
      price: 70000,
      image: "https://5.imimg.com/data5/SELLER/Default/2024/4/414074292/OQ/RG/UD/35721490/apple-macbook-air-500x500.png"
    },
    {
      title: "Air buds",
      description: "Product Description",
      price: 20000,
      image: "https://m.media-amazon.com/images/I/61oCISLE+PL.jpg"
    },
    {
      title: "IPhone 16 Pro",
      description: "kata hua seb",
      price: 120000,
      image: "https://ivenus.in/wp-content/uploads/2024/09/iPhone_16_Pro_Natural_Titanium_PDP_Image_Position_1__en-IN-scaled.jpg"
    },
  ];

  return (
    <div>
      <div className="card-container p-[10rem] w-screen flex justify-around">
        {products.map((product, idx) => {
            return <Card product={product} key={idx}/>
        })}
      </div>
    </div>
  );
}

export default Home;
