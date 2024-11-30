import { bucket } from "../firebase.js";
import Product from "../models/product.model.js";
import { cloudinary } from "../cloudinary.js";
export const createProduct = async (req, res) => {
  try {
    const { name, price, sold } = req.body;
    const images = req.files.image;

    // Upload images to Firebase
    const imageUrls = await Promise.all(images.map(uploadFileToCloudinary));
    // Create new product
    const newProduct = new Product({
      name,
      price,
      sold,
      imageUrls,
      createdAt: Date.now(),
      updateAt: Date.now(),
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const uploadFileToFirebase = (file) => {
  return new Promise((resolve, reject) => {
    const blob = bucket.file(file.originalname);
    const blobStream = blob.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    blobStream.on("error", (error) => {
      reject(error);
    });

    blobStream.on("finish", async () => {
      try {
        await blob.makePublic();
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        resolve(publicUrl);
      } catch (error) {
        reject(error);
      }
    });

    blobStream.end(file.buffer);
  });
};
const uploadFileToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "products" }, (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url); // Trả về URL công khai của tệp đã tải lên
      })
      .end(file.buffer);
  });
};
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const searchProducts = async (req, res) => {
  try {
    const { name, price } = req.body;

    const searchCriteria = {};
    if (name) searchCriteria.name = { $regex: name, $options: "i" };
    if (price) searchCriteria.price = price;

    const products = await Product.find(searchCriteria);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, sold } = req.body;

    const images = req.files.image;

    let imageUrls = [];
    if (images) {
      imageUrls = await Promise.all(images.map(uploadFileToCloudinary));
    }

    const updatedProductData = {
      name,
      price,
      sold,
      updateAt: Date.now(),
    };

    if (imageUrls.length > 0) {
      updatedProductData.imageUrls = imageUrls;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updatedProductData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
