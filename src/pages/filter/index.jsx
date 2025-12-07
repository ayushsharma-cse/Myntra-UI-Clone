import "./filter.css";

const Filter = () => {
  return (
    <div className="filters">
      <div className="filters_header">
        <span>Filters</span>
        <i></i>
      </div>
      <div className="filters_search">
        <span>Product Name / Brand</span>
        <input type="text" placeholder="Search by name" />
      </div>
      <div className="filters_price">
        <span>Price</span>
        <div className="high_low_filter">
          <input type="radio" id="highlow" name="price" value={"highlow"} />
          <label htmlFor="highlow">High to Low</label>
        </div>
        <div className="high_low_filter">
          <input type="radio" id="lowhigh" name="price" value={"lowhigh"} />
          <label htmlFor="lowhigh">Low to High</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
