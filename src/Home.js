import React from "react";
import "./Home.css";
import Product from "./Product";
import Slider from "./Slider";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <Slider />
        {/* <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}
        <div className="home_row">
          <Product
            id="73467242"
            title="YI 4pc Security Home Camera, 1080p 2.4G WiFi Smart Indoor Nanny IP Cam with Night Vision, 2-Way Audio, AI Human Detection, Phone App, Pet Cat Dog Cam - Works with Alexa and Google"
            price={89.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61hjbQUargL._AC_UL450_SR450,320_.jpg"
          />
          <Product
            id="28376576"
            title="HP DeskJet 2755e Wireless Color All-in-One Printer with bonus 6 months Instant Ink with HP+ (26K67A)"
            price={849}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61UdeL7aO-L._AC_UL450_SR450,320_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="234749"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          />

          <Product
            id="283728644"
            title="Where the Crawdads Sing"
            price={9.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL254_SR254,254_.jpg"
          />
          <Product
            id="283728332"
            title="The Alchemist, 25th Anniversary: A Fable About Following Your Dream"
            price={8.89}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51kcX5PpaZL._AC_UL127_SR127,127_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="32532532"
            title="Natural Dried Pampas Grass Bouquet,Boho Home Decor Bouquet, Phragmites Dried Flowers,Bouquet for Wedding Floral Arrangements Home Decorations"
            price={21.89}
            rating={4}
            image="https://m.media-amazon.com/images/I/91+O6e7J01L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="32534243"
            title="Der Rose 3 Pack Mini Potted Fake Plants Artificial Plastic Eucalyptus Plants for Home Office Desk Farmhouse Room Decor"
            price={25.89}
            rating={4}
            image="https://m.media-amazon.com/images/I/715Nbzwto6L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="32552352"
            title="Bonsai Tree Light for Room Decor, Aesthetic Lamps for Living Room, Cute Night Light for House Decor, Good Ideas for Gifts, Home Decorations, Weddings,Christmas, Holidays and More (Warm White, 108 LED)"
            price={18.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71-ugcKLoOL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="23473646"
            title="Interior Car Lights Keepsmile Car Accessories Car Led Lights APP Control with Remote Music Sync Color Change RGB Under Dash Car Lighting with Car Charger 12V 2A LED Lights for Car (RGB)"
            price={14.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71bCyrGXmUL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="123418471"
            title="70mai Smart Dash Cam 1S, 1080P Full HD, Smart Dash Camera for Cars, Sony IMX307, Built-in G-Sensor, WDR, Powerful Night Vision"
            price={39.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/613pK07PXnL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="092382732"
            title="VICSEED Magnetic Phone Holder for Car [Strongest Magnet Power] Magnetic Phone Mount 360° Adjustable Air Vent Phone Mount Fit iPhone 13 12 Pro Max Mini MagSafe Case & All Phones Magsafe Rings Included"
            price={29.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71uqg2a5zqL._AC_UL480_QL65_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="28372874"
            title="SAMSUNG 34-Inch SJ55W Ultrawide Gaming Monitor (LS34J550WQNXZA) – 75Hz Refresh, WQHD Computer Monitor, 3440 x 1440p Resolution, 4ms Response, FreeSync, Split Screen, HDMI, Black"
            price={299.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/91g-Y1B09EL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
