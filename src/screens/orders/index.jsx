import HProductCard from "../../components/Hproduct_card";
import "./orders.css";

const Orders = () => {
  let data = {
    id: 100,
    brand: "H&M",
    name: "Loose Fit Zip-Through Teddy Top",
    rating: "4.3",
    reviews: 221,
    wishList: false,
    qty: 1,
    price: "2299",
    MRP: "3490",
    discount: 14,
    category: "mens", // Mens, Womens, Shoes, Accessories
    imgURIs: [
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26145996/2023/11/30/9d34b005-90be-4cc0-9f8d-bd0de9f8a2dc1701349057061LooseFitZip-throughteddytop1.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26145996/2023/11/30/09594df2-8b76-4968-bec4-f941b5b41e8b1701349057056LooseFitZip-throughteddytop2.jpg",
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26145996/2023/11/30/ba50e7c2-52ff-426c-a3f3-0ab2f62535471701349057050LooseFitZip-throughteddytop3.jpg",
    ],
  };

  return (
    <div className="orders_container">
      <div className="orders_header">
        <span>Orders</span>
      </div>
      <div className="orders_content">
        <span>Total Items : 0</span>
        <HProductCard data={data} type={"order"}></HProductCard>
      </div>
    </div>
  );
};

export default Orders;
