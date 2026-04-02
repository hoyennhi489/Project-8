import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState(['Milk', 'Bread', 'Eggs']);
  const [newItem, setNewItem] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    if (!newItem.trim()) return;

    const itemToAdd = `${newItem} x ${quantity}`;
    setItems([...items, itemToAdd]);
    setNewItem('');
    setQuantity(1);
  };

  return (
    <div className="shopping-app">
      <header>
        <h1>Shopping List</h1>
        <p>Quickly note the items you need to buy.</p>
      </header>

      <div className="form-row">
        <input
          type="text"
          placeholder="Item to buy"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <button onClick={handleAdd}>Add</button>
      </div>

      <section className="list-section">
        {items.length === 0 ? (
          <div className="empty">List is empty.</div>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;