import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap-icons/font/bootstrap-icons.css";
//import { Container } from "react-bootstrap";
import Image from "next/image";
import './style.css';


const TopSection = () => {
  return (
    <div className ="container my-5">
            
            <h2 className ="fw-bold text-center">Shop our most popular categories</h2>
            <div className ="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3 text-center">
                {/*<div className ="col">*/}
                    <img src="/men-clothing.jpg" className ="category-img" alt="Men's Clothing"/>
                    <p className = "center-text">Men</p>
                {/*</div>*/}
                
                    <img src="/women-clothing.jpg" className ="category-img" alt="Women's Clothing"/>
                    <p className = "center-text">Women</p>
               
                    <img src="/accessories.jpg" className ="category-img" alt="Accessories & Jewelry"/>
                    <p className = "center-text">Jewelry & Accesories</p>
            </div>
        </div>
  );
};

const BottomSection = () => {
  return (
    <div className ="container my-5">
            {/* Gifts Section */}
            <h2 className ="fw-bold text-center">Discover gifts for every occasion</h2>
            <div className ="d-flex flex-wrap justify-content-center gap-4 text-center">
                <div>
                    <img src="/gift-for-her.jpg" className ="gift-img rounded-full" alt="Gifts for Her"/>
                    <p>Gifts for Her</p>
                </div>
                <div>
                    <img src="/gift-for-him.jpg" className ="gift-img" alt="Gifts for Him"/>
                    <p>Gifts for Him</p>
                </div>
                <div>
                    <img src="/elegant-gift.jpg" className ="gift-img" alt="Engagement Gifts"/>
                    <p>Engagement Gifts</p>
                </div>
                <div>
                    <img src="/baby-gift.jpg" className ="gift-img" alt="Baby Gifts"/>
                    <p>Baby Gifts</p>
                </div>
                <div>
                    <img src="/personalized-jewelry.jpg" className ="gift-img" alt="Personalized Jewelry"/>
                    <p>Personalized Jewelry</p>
                </div>
                <div>
                    <img src="/flower-gift.jpeg" className ="gift-img" alt="Flower Gifts"/>
                    <p>Flower Gifts</p>
                </div>
            </div>
        </div>
  );
};

export default function Home() {
  return (
    <main>   
        <TopSection />
        <BottomSection />
    </main>
  );
}
