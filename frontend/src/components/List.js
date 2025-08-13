// frontend/src/components/List.js
import Card from "./Card";

function List({ list }) {
  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid black", width: "200px" }}>
      <h3>{list.title}</h3>
      {list.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default List;
