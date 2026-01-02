import { useState } from "react";

function CustomersSay() {
  const [hovered, setHovered] = useState(null);

  const sectionStyle = {
    padding: "60px 20px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2.2rem",
    fontWeight: "600",
    marginBottom: "40px",
    fontFamily: "Poppins, sans-serif",
    color: "#333",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  const cardStyle = (isHovered) => ({
    background: "#fff",
    borderRadius: "18px",
    padding: "25px 20px",
    boxShadow: isHovered
      ? "0 14px 30px rgba(0,0,0,0.12)"
      : "0 8px 20px rgba(0,0,0,0.08)",
    transform: isHovered ? "translateY(-8px) scale(1.02)" : "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
  });

  const imgStyle = {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "12px",
  };

  const starsStyle = {
    color: "#F4CE14",
    fontSize: "1.1rem",
    marginBottom: "12px",
  };

  const reviewStyle = {
    fontSize: "0.95rem",
    color: "#555",
    marginBottom: "15px",
    lineHeight: "1.5",
  };

  const nameStyle = {
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "#333",
  };

  const testimonials = [
    {
      img: "/customer1.jpg",
      review: "Absolutely loved the food! Fresh, flavorful, and beautifully served.",
      name: "Sarah M.",
    },
    {
      img: "/customer2.jpg",
      review: "The ambiance and service were perfect. Highly recommend!",
      name: "James L.",
    },
    {
      img: "/customer3.jpg",
      review: "Best Mediterranean food I’ve had in a long time.",
      name: "Emily R.",
    },
    {
      img: "/customer4.jpg",
      review: "Great experience from start to finish. Will come again!",
      name: "Michael K.",
    },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>What Our Customers Say</h2>

      <div style={gridStyle}>
        {testimonials.map((item, index) => (
          <div
            key={index}
            style={cardStyle(hovered === index)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={item.img} alt={item.name} style={imgStyle} />
            <div style={starsStyle}>★★★★★</div>
            <p style={reviewStyle}>“{item.review}”</p>
            <span style={nameStyle}>— {item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
