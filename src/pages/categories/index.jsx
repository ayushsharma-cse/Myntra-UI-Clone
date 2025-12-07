import { useNavigate } from "react-router-dom";
import { MyntraData } from "../../data/index";
import "./categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories_header">
        <span>Shop by category</span>
      </div>
      <div className="category_content">
        <CategotyRow list={MyntraData.shopCategory.row1} />
        <CategotyRow list={MyntraData.shopCategory.row2} />
        <CategotyRow list={MyntraData.shopCategory.row3} />
      </div>
    </div>
  );
};

const CategotyRow = ({ list }) => {
  const navigate = useNavigate();
  return (
    <div className="category_row">
      {list.map((item, index) => (
        <img
          src={item}
          alt={item}
          key={index}
          onClick={() => navigate("/product")}
        />
      ))}
    </div>
  );
};
export default Categories;
