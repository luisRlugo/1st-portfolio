import luis from "../../assets/pics/luis.jpg";
import "./index.scss";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <div className="text-content">
          <h1 className="title">
            Hello, I'm Luis Lugo a full stack Web Developer
          </h1>
        </div>
        <img className="image-content" src={luis} alt="me" />
      </div>
    </div>
  );
};

export default Home;
