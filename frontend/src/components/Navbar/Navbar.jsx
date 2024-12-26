import React, { useState } from 'react';
import './Navbar.css';
import logo_image from '../../assets/OLX_green_logo.svg.png';
import lens_image from '../../assets/lens.png';
import arrow_image from '../../assets/arrow.png';
import guitar from '../../assets/guitar.webp';
import heart from '../../assets/heart.webp';
import chat from '../../assets/caht.webp';
import profile_icon from '../../assets/boy.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from "../../userContext";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isOtpModal,setOtpModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLogin, setLogin] = useState(false);
  const [email ,setEmail]=useState('')
  const [otp ,setOtp]=useState('')
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);
  const {loginUser,user,logoutUser} = useUser();
  const navigate = useNavigate()
  
  const images = [guitar, heart, chat];

  const handleGoSell = ()=>{
    if(user){
      navigate('/post')
    }else{
      setModalOpen(true)
    }
}

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setOtpModalOpen(false)
    setLogin(false); 
  };

  const handleLoginClick = () => {
    setLogin(true); // Switch to login view
  };

const handleEmailChange = (e)=>{
  const value = e.target.value;
  setEmail(value)
}

const handleOtpChange =(e)=>{
  const value = e.target.value
  setOtp(value)
}

  const handleEmailSubmit = async () => {

    try{
      const response = await fetch('http://localhost:3000/user/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({email})
      })
      const data = await response.json();
      if(response.ok){
        toast.success(data.message || 'OTP sent successfully!');
        setModalOpen(false);
        setOtpModalOpen(true)
        setLogin(false); 
      }else{
        toast.error(data.message || 'Failed to sent OTP');
      }

    }catch(error){
      console.error('Error senting OTP:',error)
      toast.error('An error occurred.Please try again later');
    } 

  };
  const handleOtp = async ()=>{
    try{
      const response = await fetch('http://localhost:3000/user/verify-otp',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({email,otp})
      })
      const data = await response.json();
      if(response.ok){
        loginUser(email)
        toast.success('Login successfull');
        setOtpModalOpen(false)
        setLogin(false); 
      }else{
        toast.error(data.message || 'Invalid OTP');
      }

    }catch(error){
      console.error('Error verifying OTP:',error)
      toast.error('An error occurred.Please try again later');
    }
  }


  return (
    <div className="navbar">
      <div className="navbartop">
        <div className="navtop">
          <div className="navone">
            <div className="logo">
              <img src={logo_image} alt="OLX logo" />
            </div>
            <div className="head_location">
              <img src={lens_image} alt="" className="First_lens_image" />
              <input
                type="text"
                placeholder="India"
                className="search-input"
              />
              <img src={arrow_image} alt="" className="arrow_image" />
            </div>
            <div className="head_search">
              <input
                type="search"
                placeholder="Find cars,Mobile and more...."
              />
              <img src={lens_image} alt="" className="lens_image" />
            </div>
            <div className="lang">
              <p>English</p>
              <img src={arrow_image} alt="" className="Lan_arrow_image" />
            </div>
            { user ?(
                <div 
                className="profile-section" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={profile_icon}
                  alt="profile"
                  className="profile-icon"
                />
                {isDropdownOpen && (
                  <div className="dropdown">
                    <div className="dropdownProfile">
                    <img
                        src={profile_icon}
                        alt="profile"
                        className="profile-icon"
                        />
                        <p>{user.email}</p>
                    </div>
                   
                    <button 
                      className="logout-button" 
                      onClick={logoutUser}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ):(
              <div className="login" onClick={handleOpenModal}>
              <p>Login</p>
              </div>
             )}
            <div className="sellBtn">
              <p onClick={handleGoSell}>Sell</p>
            </div>
          </div>
          <div className="navtwo">
            <div className="all-cat">
              <p>ALL CATEGORIES</p>
              <img src={arrow_image} alt="" className="arrow_image_Cat" />
            </div>
            <a href="#">Cars</a>
            <a href="#">Motorcycles</a>
            <a href="#">Mobile Phones</a>
            <a href="#">For Sale: Houses & Apartments</a>
            <a href="#">Scooters</a>
            <a href="#">Commercial & Other Vehicles</a>
            <a href="#">For Rent: Houses & Apartments</a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {isLogin ? (
              <div className="login-container">
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
                <div className="logo">
                  <img src={logo_image} alt="" />
                </div>
                <div className="email-input">
                  <h3>Enter your email to login</h3>
                  <input
                    type="email"
                    id="email"
                   placeholder='Email'
                   value={email}
                   onChange={handleEmailChange }
                  /> <br />
                  <button onClick={handleEmailSubmit} className='nextBtn'>Next</button>
                  <p>Your email is never shared with external parties nor do we </p>
                    <p>use it to spam you in any way.</p>
                </div>
              </div>
            ) : (
              <>
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>

                <div className="modal-header">
                  <button onClick={prevImage}>{"<"}</button>
                  <img
                    src={images[currentImageIndex]}
                    className="coursel-image"
                    alt=""
                  />
                  <button onClick={nextImage}>{">"}</button>
                </div>

                <div className="modal-button">
                  <button>Continue with phone</button>
                  <br />
                  <button>Continue with Google</button>
                </div>

                <div className="text">
                  <p>OR</p>
                  <a href="#" onClick={handleLoginClick}>
                    Login with email
                  </a>
                  <div className="bottom">
                    <p>All your personal details are safe with us.</p>
                    <p>
                      If you continue, you are accepting{" "}
                      <a href="#">OLX Terms and</a>
                    </p>
                    <a href="#">Conditions and Privacy Policy</a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {isOtpModal && (
        <div className="modal">
          <div className="modal-content">
              <div className="login-container">
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
                <div className="logo">
                  <img src={logo_image} alt="" />
                </div>
                <div className="email-input">
                  <h3>Enter verification code</h3>
                  <p>We sent a 4-digit code</p>
                  <input
                    type="email"
                    id="Otp"
                   placeholder='OTP'
                   value={otp}
                   onChange={handleOtpChange}
                  /> <br />
                  <button  className='nextBtn' onClick={handleOtp}>Submit</button>
                </div>
              </div>
          </div>
        </div>
      )}
  <ToastContainer />
    </div>
  );
}

export default Navbar;
