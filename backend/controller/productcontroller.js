const Car = require('../model/carModal')
const path = require('path');
const fs = require('fs');

const getProducts = async (req, res) => {
    try {
      
      const products = await Car.find();
    
      
      res.json({ products });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch products." });
    }
};



const addProduct = async (req, res) => {
    
    
   
  
    try {
      const { brand, year, fuel, transmission, km_driven, price, ad_title, description,state,images } = req.body;
      
       if(!brand){
        return res.status(400).json({success:false,message:'brand name is empty'})
       } 
       if(!year){
        return res.status(400).json({success:false,message:'year filed is empty'})
       } 
       if(!fuel){
        return res.status(400).json({success:false,message:'fuel name is empty'})
       } 
       if(!transmission){
        return res.status(400).json({success:false,message:'transmission name is empty'})
       } 
       if(!km_driven){
        return res.status(400).json({success:false,message:'km_driven is empty'})
       } 
       if(!price){
        return res.status(400).json({success:false,message:'price is empty'})
       } 
       if(!ad_title){
        return res.status(400).json({success:false,message:'ad_title is empty'})
       } 
       if(!description){
        return res.status(400).json({success:false,message:'description is empty'})
       } 
       if(!state){
        return res.status(400).json({success:false,message:'state name is empty'})
       } 



    if (!images || images.length === 0) {
        return res.status(400).json({ success: false, message: "No images provided" });
      }
  
     
      const validImages = images.filter(image => image && typeof image === 'string');
  
     
      if (validImages.length === 0) {
        return res.status(400).json({ success: false, message: "Invalid or empty image data" });
      }


      const imagePaths = validImages.map((image, index) => {
        const buffer = Buffer.from(image, 'base64');
        const timestamp = Date.now();
        const imageName = `image_${timestamp}_${index + 1}.jpg`;
        const imagePath = path.join(__dirname, '../uploads', imageName);
        fs.writeFileSync(imagePath, buffer);
        return `/uploads/${imageName}`;
      });
      
      
  
      const newCar = new Car({
        brand,
        year,
        fuel,
        images: imagePaths, 
        transmission,
        km_driven,
        price,
        ad_title,
        description,
        state,
      });
  
      await newCar.save();
  
      res.json({
        success: true,
        message: "Product added successfully",
         
      });
      
    } catch (error) {
      console.error("Error saving product:", error);
      res.status(500).json({
        success: false,
        message: "Failed to store product data",
      });
    }
  };

  module.exports={
    addProduct,
    getProducts
  }