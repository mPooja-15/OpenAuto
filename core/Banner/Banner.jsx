import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { CgPushChevronDownO } from "react-icons/cg";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Banner = () => {
  const [data, setData] = useState();
  const [error, Seterror] = useState(false);
  const [respData, SetrespData] = useState();
  const handleChange = (event) => {
    if (data?.name === "" || data?.email === "") {
      Seterror(true);
    } else {
      Seterror(false);
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const handleClick = async () => {
    if (data === undefined) {
      Seterror(true);
    } else {
      axios.post("http://localhost:3000/api/register", data).then((res) => {
        if (res.data.success === true) {
          toast?.success("Successfully Registered!");
        }
        SetrespData(res.data.data);
      }).catch((error)=>{
        console.log(error,"error");
        toast?.error(error?.response?.data?.Message);
      });
      Seterror(false);
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
              <h1 className="banner-text">
                Vehicle Maintenance from the comfort of your home{" "}
              </h1>
            </div>
            <div className="mb-4">
              <p className="fw-lighter banner-para">
                Open Auto soothes the hassle of maintaining your vehicles and
                helps you deal with unexpected repairs worry-free{" "}
              </p>
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
                <p className="text-danger">Please Enter Your Name</p>
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
                <p className="text-danger">Please Enter Your Email</p>
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
          <span className="ps-2">
            <FaFacebookF />
          </span>
          <span className="ps-2">
            <AiOutlineTwitter />
          </span>
          <span className="ps-2">
            <AiFillYoutube />
          </span>
          <span className="ps-2">
            <AiFillLinkedin />
          </span>
          <span className="ps-2">
            <AiOutlineInstagram />
          </span>
        </div>
      </div>
    </>
  );
};

export default Banner;
