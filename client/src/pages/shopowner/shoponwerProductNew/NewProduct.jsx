import React, { useState } from "react";
import "./newProduct.scss";
import AdminNavBar from "../../../components/admin/adminNavbar/AdminNavBar";
import ShopOwnerLeftBar from "../shopownerLeftBar/shopOwnerLeftBar";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector
import app from "../../../utilities/firebase";

// Upload images
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { addProduct } from "../../../redux/apiCalls";
import { useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";

function Newproduct() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  
  // Get the user ID from the Redux store
  const userId = useSelector((state) => state.user.currentUser?._id); // Thay thế 'user' bằng tên reducer của bạn

  const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setCategories((prev) => [...prev, value]);
    } else {
      setCategories((prev) => prev.filter((category) => category !== value));
    }
  };

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload an image.");
      return;
    }

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.error("Upload failed:", error);
        alert("Failed to upload image. Please try again.");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            img: downloadURL,
            categories: categories,
            userId: userId, // Thêm ID của người dùng vào sản phẩm
          };
          addProduct(dispatch, product);
          navigate("/adminProductList", { state: "Created" });
        });
      }
    );
  };

  return (
    <div className="new-product-container">
      <AdminNavBar />
      <div className="new-product-bottom">
        <ShopOwnerLeftBar />
        <div className="bottom-right">
          <h1 className="new-product-title">New Product</h1>
          <form className="new-product-form" onSubmit={handleCreateProduct}>
            <div className="new-product-left">
              <div className="new-product-item">
                <label>Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                />
              </div>
              <div className="new-product-item">
                <label>Title</label>
                <input
                  name="title"
                  type="text"
                  placeholder="Simple Lily Rose"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="new-product-item">
                <label>In Stock</label>
                <select name="inStock" onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
              <button type="submit" className="create-btn">
                Create
              </button>
            </div>
            <div className="new-product-right">
              <div className="new-product-item">
                <label>Description</label>
                <TextArea
                  name="desc"
                  onChange={handleChange}
                  placeholder="Description"
                  autoSize={{ minRows: 1, maxRows: 5 }}
                  required
                />
              </div>
              <div className="new-product-item">
                <label>Price</label>
                <input
                  name="price"
                  type="number"
                  placeholder="price"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="new-product-item">
                <label style={{ marginBottom: "10px" }}>Materials</label>
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className="new-product-materials"
                >
                  <input
                    type="checkbox"
                    id="love"
                    value="love"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="love">Mosaic Picture</label>
                  <input
                    type="checkbox"
                    id="thanks"
                    value="thanks"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="thanks">Lót ly</label>
                  <input
                    type="checkbox"
                    id="graduation"
                    value="graduation"
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="graduation">Mosaics</label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newproduct;
