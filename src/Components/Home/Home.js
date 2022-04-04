import "./Home.css";
import image from "../../images/desktop-computer_ifwwds.jpeg";
import useProducts from "../../hooks/useProduct";
import { useNavigate } from "react-router-dom";
import Review from "../Review/Review";

const Home = () => {
  const [reviews] = useProducts();
  const navigate = useNavigate();

  const showAllReviews = () => {
    navigate("/reviews");
  };

  return (
    <div>
      <div className="home-container">
        <div className="product-container">
          <h1>your next computer</h1>
          <h2 className="sub-title">your best computer</h2>
          <p>
            A computer is an electronic device that manipulates information, or
            data. It has the ability to store, retrieve, and process data. You
            may already know that you can use a computer to type documents, send
            email, play games, and browse the Web. You can also use it to edit
            or create spreadsheets, presentations, and even videos.
          </p>
          <button className="text-center text-white font-bold rounded-md py-2 my-6 w-2/12 bg-blue-900">
            Live demo
          </button>
        </div>
        <div className="img-container">
          <img src={image} alt="" />
        </div>
      </div>
      <div>
        <h1 className="text-5xl text-center font-bold my-8">
          Customers Reviews
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>

        <button
          onClick={showAllReviews}
          className="text-center text-white font-bold rounded-md py-2 my-6 w-2/12 bg-blue-900"
        >
          See All Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
