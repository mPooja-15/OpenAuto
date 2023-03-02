import { CgPushChevronDownO } from "react-icons/cg";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { textString, iconRender } from "../../utils/string";

const URL = "http://localhost:3000/api";

const Banner = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [respData, setResp] = useState();

  const handleChange = (event) => {
    if (data?.name === "" || data?.email === "") {
      setError(true);
    } else {
      setError(false);
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const handleClick = async () => {
    if (data === undefined) {
      setError(true);
    } else {
      axios
        .post(`${URL}/register`, data)
        .then((res) => {
          if (res.data.success === true) {
            toast?.success("Successfully Registered!");
          }
          setResp(res.data.data);
        })
        .catch((error) => {
          console.log(error, "error");
          toast?.error(error?.response?.data?.Message);
        });
      setError(false);
    }
  };
  const HandleScroll = () => {
    window.scrollBy(0, 1000);
  };

  return (
    <>
      <div className="openauto-container banner-bg mt-5 pt-5">
        <div className="d-lg-flex d-sm-block align-items-center">
          <Toaster position="top-center" reverseOrder={false} />
          <div>
            <div>
              <h1 className="banner-text">{textString.vehicleTxt}</h1>
            </div>
            <div className="mb-4">
              <p className="fw-lighter banner-para">{textString.openTxt}</p>
            </div>
            <div className="my-4 input-responsive">
              <input
                type="text"
                name="name"
                className={
                  error ? "banner-input border-danger" : "banner-input"
                }
                placeholder="Enter Your Name"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {error ? (
                <p className="text-danger text-left">{textString.errorName}</p>
              ) : (
                ""
              )}
            </div>
            <div className="input-responsive">
              <input
                type="email"
                name="email"
                className={
                  error ? "banner-input border-danger" : "banner-input"
                }
                placeholder="Enter Your Email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {error ? (
                <p className="text-danger text-left">{textString.errorEmail}</p>
              ) : (
                ""
              )}
            </div>
            <div className="mt-4 input-responsive">
              <button className="submit-btn" onClick={handleClick}>
                Submit
              </button>
            </div>
          </div>

          <div className="w-100">
            <img className="img-fluid" src="/assets/Pickup_Illustration.png" />
          </div>
        </div>
        <div className="fs-5 py-4 input-responsive text-end">
          <div className="down-arrow" onClick={HandleScroll}>
            <CgPushChevronDownO />
          </div>
          
          {iconRender.map((data) => {
            return <span className="ps-2">{data}</span>;
          })}
        </div>
      </div>
    </>
  );
};

export default Banner;
