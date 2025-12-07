import "./product_card.css";

const ProductCard = ({ data }) => {
  return (
    <div className="product_card">
      <div className="product_card_img">
        <img src={data.imgURIs[0]} alt={data.imgURIs[0]} />
        <div className="product_card_ratings">
          <p>
            <span>{data.rating}</span> <i></i> <span>| {data.reviews}</span>
          </p>
        </div>

        {/* product_fill_heart ; product_empty_heart */}
        <div
          className={
            data.wishList ? "product_fill_heart" : "product_empty_heart"
          }
        ></div>
      </div>

      <div className="product_card_details">
        <span className="product_card_brand">{data.brand}</span>
        <span className="product_name">{data.name}</span>
        <p className="product_prices">
          Rs. {data.price} <del>Rs. {data.MRP}</del>{" "}
          <span>{`(${data.discount}% OFF)`}</span>
        </p>
      </div>

      <div className="product_card_btn">
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
