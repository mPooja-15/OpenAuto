import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { iconRender, textString } from "../../utils/string";

const Footer = () => {
  return (
    <div style={{ background: "#0e1216" }}>
      <div className="openauto-container py-5">
        <div className="d-flex align-items-center justify-content-between footer-resp">
          <div className="text-white">
            <h1>{textString.openauto}</h1>
          </div>
          <div className="px-2 footer-icon-div">
            <span className="footer-icon-resp">
              {" "}
              <span>
                <IoMdCall />
              </span>{" "}
              <span className="ps-1">{textString.phNo}</span>
            </span>
            <span className="ms-2">
              <HiMail />
            </span>{" "}
            <span className="px-1">{textString.accountEmail}</span>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between footer-terms">
          <div className="text-center mt-2 mt-lg-0">
            <p>Open Auto &copy; all rights reserved</p>
          </div>
          <div className="privacy d-none">
            <p>{textString.privacy}</p>
            <p>{textString.termUse}</p>
            <p>{textString.cookiePolicy}</p>
          </div>
          <div className="fs-5 privacy">
            {iconRender.map((data) => {
              return <span className="ps-lg-4">{data}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
