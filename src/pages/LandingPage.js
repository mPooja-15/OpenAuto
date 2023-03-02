import Banner from "../../core/Banner/Banner";
import Footer from "../../core/Footer/footer";
import { textString } from "../../utils/string"
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
              <h1 className="focus-text">{textString.focusTxt}</h1>
              <p className="fw-light dummy-text">
                {textString.loremText}
              </p>
              <div className="btn-resp">
                <button className="bg-transparent button-styling">
                  {textString.downloadTxt}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
