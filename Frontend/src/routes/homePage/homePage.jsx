import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Furniture & Get Your Dream Furniture</h1>
          <p>
          If you're looking for hassle-free furniture solutions, consider renting from platforms like Fernish, Express Furniture Rental, or Rent One. These services offer flexible options for renting, rent-to-own, or buying furniture and décor. Whether you need a sofa, bed, or dining table, explore these platforms to find the perfect fit for your space! 
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Furniture</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg1.jfif" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
