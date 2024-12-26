import React, { useState } from "react";
import "./Sellform.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    brand: "",
    year: "",
    fuel: "",
    transmission: "",
    kmDriven: "",
    owners: "",
    adTitle: "",
    description: "",
    price:"",
    state:"",
  });
  const [images, setImages] = useState(Array(12).fill(null)); 
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelection = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedImages = [...images];
        updatedImages[index] = reader.result; // Store the base64 image data
        setImages(updatedImages);
      };
      reader.readAsDataURL(file);
    }
  };



  const handleSubmitForm = async (e) => {
    e.preventDefault();
   
    const productImages = images.map((image) => {
      return image ? image.split(",")[1] : null; // Extract base64 string from data URI
    });
    
    const payload = {
      brand: formData.brand,
      year: formData.year,
      fuel: formData.fuel,
      transmission: formData.transmission,
      km_driven: formData.kmDriven,
      price: formData.price,
      ad_title: formData.adTitle,
      description: formData.description,
      state: formData.state,
      images: productImages,
    };

      try{
          const response = await fetch('http://localhost:3000/product/add',{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify(payload)
          })
          const data = await response.json();
          if(response.ok){
            if(data.success){
              toast.success(data.message || 'Product added successfully', {
                duration: 1500,
                onClose: () => navigate('/')
              });
            }else{
              toast.error(data.message || 'Product adding failure');
            }
          }else{
            toast.error(data.message || 'Failed to Add product');
          }
    
        }catch(error){
          console.error('Error adding product:',error)
          toast.error('An error occurred.Please try again later');
        } 
  };

  return (
    <div className="form-list">
      <div className="form-heading">
        <h2>POST YOUR AD</h2>
      </div>
      <form className="form-container" onSubmit={handleSubmitForm}> 
        <div className="header-container">
          <h3>Selected Category</h3>
          <p>Cars / Cars</p> <a href="#">Change</a>
        </div>
        <div className="input-container">
          <h3>Include Some Details</h3>

          <label htmlFor="brand">Brand *</label>
          <select
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Ford">Ford</option>
            <option value="Suzuki">Suzuki</option>
            <option value="Volvo">Volvo</option>
            <option value="BMW">BMW</option>
          </select>

          <label htmlFor="year">Year *</label>
          <input
            type="text"
            id="year"
            name="year"
            
            value={formData.year}
            onChange={handleInputChange}
          />

          <label htmlFor="fuel">Fuel *</label>
          <div className="fuel-options">
            {["CNG & Hybrids", "Diesel", "Electric", "LPG", "Petrol"].map(
              (fuel) => (
                <button
                  type="button"
                  key={fuel}
                  className={formData.fuel === fuel ? "selected" : ""}
                  onClick={() => handleSelection("fuel", fuel)}
                >
                  {fuel}
                </button>
              )
            )}
          </div>

          <label htmlFor="transmission">Transmission *</label>
          <div className="transmission-options">
            {["Automatic", "Manual"].map((trans) => (
              <button
                type="button"
                key={trans}
                className={formData.transmission === trans ? "selected" : ""}
                onClick={() => handleSelection("transmission", trans)}
              >
                {trans}
              </button>
            ))}
          </div>

          <label htmlFor="kmDriven">KM driven *</label>
          <input
            type="text"
            id="kmDriven"
            name="kmDriven"
            value={formData.kmDriven}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="owners">No. of Owners *</label>
          <div className="owners-options">
            {["1st", "2nd", "3rd", "4+"].map((owner) => (
              <button
                type="button"
                key={owner}
                className={formData.owners === owner ? "selected" : ""}
                onClick={() => handleSelection("owners", owner)}
              >
                {owner}
              </button>
            ))}
          </div>

          <label htmlFor="adTitle">Ad title *</label>
          <input
            type="text"
            id="adTitle"
            name="adTitle"
           
            value={formData.adTitle}
            onChange={handleInputChange}
          />

          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            
            style={{ width: "400px", height: "150px",marginLeft:"30px",marginBottom:'20px'}}
            value={formData.description}
            onChange={handleInputChange}
          />

          
        </div>
        <div className="price-container">
        <h3>SET A PRICE</h3>
        <label htmlFor="year">Price *</label>
          <input
            type="text"
            id="price"
            name="price"
            
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="image-container">
          <h3>Upload images</h3>
          <div className="image-grid">
            {images.map((image, index) => (
              <div className="image-box" key={index}>
                {image ? (
                  <img src={image} alt={`Uploaded ${index + 1}`} />
                ) : (
                  <>
                    <label htmlFor={`image-input-${index}`} className="upload-label">
                      <div className="placeholder">
                        <span>Add Photo</span>
                      </div>
                    </label>
                    <input
                      type="file"
                      id={`image-input-${index}`}
                      accept="image/*"
                      onChange={(e) => handleImageChange(index, e)}
                      style={{ display: "none" }}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="location-container">
        <h3>Confirm your location</h3>
        <label htmlFor="location">state *</label>
        <select
            id="brand"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Kerala">Kerala</option>
            <option value="TamilNadu">TamilNadu</option>
            <option value="Maharastra">Maharastra</option>
            <option value="Delhi">Delhi</option>
            <option value="Hariyana">Hariyana</option>
            <option value="Karnadaka">Karnadaka</option>
          </select>

        </div>

        <div className="postbtn-container">
          <button>POST NOW</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Form;
