import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.css";
import Arrivals from "../components/HomepagesComp/Arrivals";
// import "../styles/membership.css"

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/get-category`);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-count`);
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  },[checked.length , radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/product-filters`, {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const scrollToAllProducts = () => {
    const allProductsSection = document.getElementById('all-products-section'); // Replace 'all-products-section' with the actual id of your "All Products" section
    if (allProductsSection) {
      window.scrollTo({
        top: allProductsSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Layout title={"ALL Products - Best offers "}>
      {/* banner image */}
      {/* <img
        src="/images/ecommerce.jpg"
        className="banner-img"
        alt="bannerimage"
        width={"100%"}
      /> */}
      {/* banner image */}


      {/* slider section */}
      <section className="slider_section ">
        <div className="slider_bg_box">
          <img src="images/slider-bg.jpg" className="banner-img" alt="bannerimage"  />
        </div>
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>
                          Sale 20% Off
                        </span>
                        <br />
                        On Everything
                      </h1>
                      <p className="para" style={{'fontSize':'1.1rem'}}>
                      Discover unbeatable savings with our Sale: 20% Off on Everything! From fashion to electronics, indulge in top-notch products at irresistible prices. Elevate your shopping experience now—limited-time offer, shop and save!
                      </p>
                      <div className="btn-box">
                        <a href className="btn1"
                         onClick={() => { 
                          scrollToAllProducts(); 
                        }}>
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* end slider section */}

     <Arrivals/>


      <div className="container-fluid row mt-3 home-page">
        <div className="col-md-3 filters">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-9 " id="all-products-section">
          <h1 className="text-center main-product" id="all-products-section">All <span className="product">Products</span> </h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" key={p._id}>
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  style={{ width: "15rem", height: "18rem" }}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title" >{p.name}</h5>
                    <h5 className="card-title card-price" >
                      {/* {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })} */}
                      ₹ {p.price}
                    </h5>
                  </div>
                  <p className="card-text " style={{'fontSize':'1.1rem', 'color':'black'}}>
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="card-name-price">
                    <button
                      className="btn btn-info ms-1 m-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-dark ms-1 m-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

      </div>

          {/* subscribe section */}
<section className="subscribe_section">
  <div className="container-fuild">
    <div className="box">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="subscribe_form ">
            <div className="heading_container heading_center">
              <h3>Subscribe To Get Discount Offers</h3>
            </div>
            <p>
Subscribe for exclusive discounts! Elevate your shopping with special offers delivered straight to your inbox. Join now!</p>
            <form action>
              <input type="email" placeholder="Enter your email" />
              <button>
                subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* end subscribe section */}
    </Layout>
  );
};

export default HomePage;
