import { useState } from "react";

function Chicago() {
  const [hoveredImg, setHoveredImg] = useState(null);

  const sectionStyle = {
    padding: "80px 20px",
    backgroundColor: "#ffffff",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    gap: "50px",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const textContainerStyle = {
    flex: "1",
    minWidth: "300px",
  };

  const titleStyle = {
    fontSize: "2.4rem",
    fontWeight: "700",
    color: "#495E57", // dark green
    marginBottom: "6px",
    fontFamily: "Poppins, sans-serif",
  };

  const subtitleStyle = {
    fontSize: "1.6rem",
    fontWeight: "600",
    color: "#F4CE14", // orange/yellow
    marginBottom: "25px",
    fontFamily: "Poppins, sans-serif",
  };

  const textStyle = {
    fontSize: "1rem",
    lineHeight: "1.7",
    color: "#555",
    maxWidth: "500px",
  };

  const imageContainerStyle = {
    flex: "1",
    minWidth: "300px",
    position: "relative",
    height: "350px",
  };

  const imageStyle = (isHovered, top, left) => ({
    position: "absolute",
    top,
    left,
    width: "260px",
    height: "320px",
    objectFit: "cover",
    borderRadius: "18px",
    boxShadow: isHovered
      ? "0 18px 40px rgba(0,0,0,0.2)"
      : "0 10px 25px rgba(0,0,0,0.12)",
    transform: isHovered
      ? "scale(1.05) rotate(1deg)"
      : "scale(1)",
    transition: "all 0.35s ease",
    cursor: "pointer",
  });

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* LEFT TEXT */}
        <div style={textContainerStyle}>
          <h2 style={titleStyle}>Little Lemon</h2>
          <h3 style={subtitleStyle}>Chicago</h3>
          <p style={textStyle}>
            Little Lemon Chicago is a family owned Mediterranean restaurant
            located in the heart of the city. The restaurant is run by brothers
            Mario and Adrian, who have always had a passion for cooking and
            serving delicious food. Growing up in a Mediterranean household, the
            brothers were exposed to traditional recipes from an early age, and
            they decided to bring those recipes to the masses with a modern
            twist.
            <br />
            <br />
            At Little Lemon, you can expect to find a menu full of classic dishes
            with a creative twist that makes them stand out from the rest.
            Whether you're looking for a quick lunch or a leisurely dinner,
            Little Lemon Chicago is the perfect place to indulge in a delicious
            meal in a cozy and welcoming atmosphere.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div style={imageContainerStyle}>
          <img
            src="/chicago1.jpg"
            alt="Little Lemon restaurant"
            style={imageStyle(hoveredImg === 1, "0", "60px")}
            onMouseEnter={() => setHoveredImg(1)}
            onMouseLeave={() => setHoveredImg(null)}
          />

          <img
            src="/chicago2.jpg"
            alt="Little Lemon chefs"
            style={imageStyle(hoveredImg === 2, "150px", "100px")}
            onMouseEnter={() => setHoveredImg(2)}
            onMouseLeave={() => setHoveredImg(null)}
          />
        </div>
      </div>
    </section>
  );
}

export default Chicago;
