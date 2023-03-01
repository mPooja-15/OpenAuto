import Banner from "../../core/Banner/Banner";
import Footer from "../../core/Footer/footer";
const { default: Header } = require("../../core/Header/Header");

const LandingPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="bg-focus">
      <div className="openauto-container focused-height py-5">
        <div className="d-flex div-order align-items-center">
          <div className="w-50 m-auto order-image">
            <img className="img-fluid " src="/assets/Phone.svg" />
          </div>
          <div className="w-50 order-text">
            <h1 className="focus-text">Focused on Time Savings</h1>
            <p className="fw-light dummy-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="btn-resp">
              <button className="bg-transparent button-styling">
                Download the app mobile
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/> 
    </>
  );
};

export default LandingPage;
