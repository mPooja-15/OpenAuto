import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import {CgPushChevronDownO} from "react-icons/cg"
import { useState } from "react";
import { registerUser } from "../../lib/route";

const Banner = () => {
  const [data, setData] = useState();
  const [error,Seterror] = useState(false);
  const handleChange = (event) =>{
    if(data?.name === "" || data?.email === ""){
        Seterror(true)
    }

    else{
        Seterror(false)
        setData({...data,[event.target.name]:event.target.value})
    }
  }
const handleClick = async() =>{
    if(data === undefined){
        Seterror(true)
    }
    else{
       try {
        const dataassd = await registerUser({
            data
          });
          console.log(dataassd
            );
       } catch (error) {
        console.log(error)
       }
      
        Seterror(false)
    }
}
const HandleScroll = ()=>{
    window.scrollBy(0,1000)
}

  console.log(data,"data");
  return (
    <>
      <div className="openauto-container banner-bg mt-5 pt-5">
        <div className="d-lg-flex d-sm-block align-items-center">
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
                className={error ? "banner-input border-danger" : "banner-input"}
                placeholder="Enter Your Name"
                onChange={(e) => {
                    handleChange(e);
                  }}
              />
              {error ? <p className="text-danger">Please Enter Your Name</p> : ""}
            </div>
            <div className="input-responsive">
              <input
                type="email"
                name="email"
                className={error ? "banner-input border-danger" : "banner-input"}
                placeholder="Enter Your Email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {error ? <p className="text-danger">Please Enter Your Email</p> : ""}
            </div>
            <div className="mt-4 input-responsive">
              <button className="submit-btn" onClick={handleClick}>Submit</button>
            </div>
          </div>

          <div className="w-100">
            <img className="img-fluid" src="/assets/Pickup_Illustration.png" />
          </div>
        </div>
        <div className="fs-5 py-4 input-responsive text-end">
            <div className="down-arrow" onClick={HandleScroll}>
            <CgPushChevronDownO/>
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
