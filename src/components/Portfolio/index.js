import seiCafe from "../../assets/pics/seiCafe.jpg";
import whackaPain from "../../assets/pics/whackaPain.jpg";
import animelist from "../../assets/pics/animelist.jpg";
import "./index.scss";
import { useState } from "react";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <div className="page-container">
      <div className="portfolio-container">
        <div className="image-container" onClick={() => openModal(1)}>
          <h2>Whack a Pain Game</h2>
          <img src={whackaPain} alt="whackaPain" />
        </div>
        <div className="image-container" onClick={() => openModal(2)}>
          <h2>Anime List Directory</h2>
          <img src={animelist} alt="animelist" />
        </div>
        <div className="image-container" onClick={() => openModal(3)}>
          <h2>SEI Cafe</h2>
          <img src={seiCafe} alt="seiCafe" />
        </div>
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {selectedImage === 1 && (
              <>
                <h3>Whack a Pain Game</h3>
                <p>
                  It's a Whac-a-male based game where you must hit Pain to get
                  points but careful not to Hinata or you'll lose a point
                </p>
                <a href="https://luisrlugo.github.io/Whac-a-Pain/">
                  Visit Website
                </a>
                <a href="https://github.com/luisRlugo/Whac-a-Pain">Github</a>
              </>
            )}
            {selectedImage === 2 && (
              <>
                <h3>Anime List Directory</h3>
                <p>
                  Users are able to see a list of Anime they searched and when
                  clicked on one it'll pop up a description about as well as a
                  link for further details.
                </p>
                <a href="https://willowy-kulfi-02bc7d.netlify.app/">
                  Visit Website
                </a>
                <a href="https://github.com/luisRlugo/Anime-Directory-">
                  Github
                </a>
              </>
            )}
            {selectedImage === 3 && (
              <>
                <h3>SEI Cafe</h3>
                <p>
                  Full Mern Website, where it has a login/logout and sign up
                  feature. Once Login the user makes orders from the following
                  choices given and is able to checkout as well as check
                  previous orders.
                </p>
                <a href="https://sei-cafe-17ke.onrender.com">Visit Website</a>
                <a href="https://github.com/luisRlugo/sei-cafe">Github</a>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
