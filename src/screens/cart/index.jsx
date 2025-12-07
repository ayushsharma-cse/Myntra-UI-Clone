import "./cart.css";
import HProductCard from "../../components/Hproduct_card";
const Carty = () => {
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
    <div className="cart_container">
      <div className="cart_item_section">
        <span>Check delivery time & service</span>
        <button>ENTER PIN CODE</button>
      </div>
      <div className="cart_items">
        <span>0 ITEMS SELECTED</span>
        <div className="cart_item_container">
          <HProductCard data={data} type={"cart"} />
        </div>
      </div>

      <div className="cart_bill_section">
        <div className="cart_bill_coupon">
          <span>Apply Coupan</span>
          <button>APPLY</button>
        </div>

        <div className="cart_bill">
          <span>PRICE DETAILS (0 item)</span>
          <table>
            <tr>
              <td>Total MRP</td>
              <td>Rs.0</td>
            </tr>
            <tr>
              <td>Platform Fee</td>
              <td>Rs.0</td>
            </tr>
            <tr>
              <td>Shipping Fee</td>
              <td>Rs.0</td>
            </tr>
            <tr className="total_amount">
              <td>Total Amount</td>
              <td>Rs.0</td>
            </tr>
          </table>
          <button>PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default Carty;
