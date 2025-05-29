// AboutUs.jsx (Updated with flower shop-aligned welcome text)
import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about">
      <div className="background-image"></div>
      <div className="about-text">
        <h1>Welcome to Green Haven — Your Blooming Escape!</h1>
        <p>
          Step into a world of color, fragrance, and natural joy. At Green Haven, we specialize in bringing beauty to life through our handpicked collection of fresh flowers and ornamental plants. Whether you’re looking to brighten your home, celebrate a special occasion, or start your own garden journey, we have blooms for every mood and moment.
        </p>
        <p>
          From vibrant bouquets to elegant potted plants, our flower shop is rooted in quality, care, and creativity. Each arrangement is crafted to inspire smiles and serenity, whether it’s a gift or a treat for yourself.
        </p>
        <p>
          Let nature take root in your life — explore Green Haven and let every petal tell your story.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
