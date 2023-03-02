import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { textString } from "../../utils/string";

const Header = () => {
  return (
    <>
      <div className="openauto-container pt-4">
        <div className="d-flex justify-content-between">
          <div>
            <h1 className="text-white">{textString.OpenAuto}</h1>
          </div>
          <div className="d-lg-flex align-items-center gap-5 download-btn">
            <div>
              <IoMdCall /> <span className="ps-1">{textString.phNo}</span>
            </div>
            <div>
              <HiMail /> <span className="ps-1">{textString.accountEmail}</span>
            </div>
            <div className="download-btn">
              <button className="bg-transparent button-styling">
                {textString.downloadTxt}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
