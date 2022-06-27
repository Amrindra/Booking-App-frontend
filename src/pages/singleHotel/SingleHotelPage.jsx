import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./SingleHotelPage.scss";

const SingleHotelPage = () => {
  const photos = [
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1"
    },
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1"
    },
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1"
    },
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1"
    },
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1"
    },
    {
      src:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1"
    }
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="singleHotelPage_container">
        <div className="singleHotelPage_wrapper">
          <h1 className="title">Grand Hotel</h1>
          <div className="singleHotelPage_address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Boston steet, Boston</span>
          </div>

          <span className="singleHotelPage_distance">Perfect location</span>
          <div className="singleHotelPage_Highlight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem!
          </div>

          <div className="singleHotelPage_images">
            {photos.map((photo) => (
              <div className="singleHotelPage_images_wrapper">
                <img src={photo.src} alt="" className="hotel_image" />
              </div>
            ))}
          </div>

          <div className="singleHotelPage_details">
            <div className="singleHotelPage_texts">
              <h1 className="title">Stay in the heart of Boston</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                aut ullam similique repellat unde qui asperiores consectetur
                facere eos numquam, sed illum autem ipsa quidem, rem at nam
                doloremque recusandae vel ad. Praesentium soluta veritatis vitae
                dolorem suscipit beatae deserunt, assumenda autem expedita animi
                officiis, illo nemo accusantium excepturi consequuntur.
              </p>
            </div>

            <div className="singleHotelPage_detail_price">
              <h1>Perfect for you</h1>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, perspiciatis.
              </span>
              <h2>
                <b>$900</b> (10 nights
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHotelPage;
