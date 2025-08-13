// frontend/src/components/Card.js
function Card({ card }) {
  return (
    <div style={{ padding: "8px", border: "1px solid #ccc", margin: "5px" }}>
      {card.name}
    </div>
  );
}

export default Card;
