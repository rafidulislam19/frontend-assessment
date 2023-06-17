import "./Product.css";
import star from "../../../src/icon/star.png";

const Product = (props) => {
  const { productImage, rating, name, variations } = props.product;
  return (
    <div className="product">
      <img src={productImage}></img>
      <h3 className="title">
        {name.length < 18 ? <>{name}</> : <>{name.slice(0, 18)}...</>}
      </h3>
      <p className="mrp-section">
        <p>
          <span>MRP</span>
          {"  "}
          <span className="mrp">{variations[0].price.mrp}</span>
        </p>
        <p className="discount">- {variations[0].productDiscount.flat}.0</p>
      </p>

      <p className="price">BDT {variations[0].price.discountedPrice}.00</p>
      <p className="rating">
        {rating === 5 ? (
          <span>
            <img className="star" src={star} />
            <img className="star" src={star} />
            <img className="star" src={star} />
            <img className="star" src={star} />
            <img className="star" src={star} />
          </span>
        ) : rating === 4 ? (
          <span>
            <img className="star" src={star} />
            <img className="star" src={star} />
            <img className="star" src={star} />
            <img className="star" src={star} />
          </span>
        ) : rating === 3 ? (
          <span>
            <img className="star" src={star} />
            <img className="star" src={star} />
            <img className="star" src={star} />
          </span>
        ) : rating === 2 ? (
          <span>
            <img className="star" src={star} />
            <img className="star" src={star} />
          </span>
        ) : rating === 1 ? (
          <span>
            <img className="star" src={star} />
          </span>
        ) : (
          <p>No Rating </p>
        )}{" "}
      </p>
    </div>
  );
};

export default Product;
