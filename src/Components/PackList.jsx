import { useEffect, useState } from "react";
import styles from "./PackList.module.css";
/*eslint-disable*/
function PackingList() {
  const [items, setItems] = useState([]);

  useEffect(function () {
    const packedItems = localStorage.getItem("packedItems");
    setItems(JSON.parse(packedItems));
  }, []);

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }
  function handleDelete(toDeleteId) {
    setItems((items) => items.filter((item) => item.id !== toDeleteId));
  }
  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm("Sure to delete all items?");
    if (confirmed === true) setItems([]);
  }
  //local storage
  //store
  useEffect(
    function () {
      // the if condition is crutial,otherwise after re-fresh is empty
      if (items.length === 0) {
        console.log("Array is empty!");
      } else {
        localStorage.setItem("packedItems", JSON.stringify(items));
      }
    },
    [items]
  );

  return (
    <div className={styles.packList}>
      <Header />
      <Form onAddItem={handleAddItem} />
      <List
        items={items}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onClearList={handleClearList}
      />
      <Footer items={items} />
    </div>
  );
}

//child componets
function Header() {
  return <h1>🌺🌴 My Packing List 📝</h1>;
}

function Form({ onAddItem }) {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) return;

    const newItem = {
      id: Date.now(),
      quantity,
      desc,
      packed: false,
    };
    console.log(newItem);
    // add new item
    onAddItem(newItem);
    //reset
    setDesc("");
    setQuantity(1);
  }
  return (
    <form className={styles.addForm} onSubmit={(e) => handleSubmit(e)}>
      <h3>Luggage:</h3>
      <select
        value={quantity}
        onChange={(e) => {
          console.log(e.target.value); //string
          setQuantity(+e.target.value); //to number
        }}
      >
        {Array.from({ length: 20 }, (e, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="My item.."
        value={desc}
        onChange={(e) => {
          console.log(e.target.value);
          setDesc(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}

function List({ items, onDelete, onToggle, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "desc")
    sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className={styles.list}>
      <ul>
        {sortedItems &&
          sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
      </ul>
      <div className={styles.actions}>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="desc">Sort by description</option>
          <option value="packed">Sort by packing status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ item, onDelete, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}&nbsp;
        {item.desc}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}

function Footer({ items }) {
  const total = items.length;
  const packed = items.filter((item) => item.packed).length;
  return (
    <footer className={styles.footer}>
      <p>
        {total === 0
          ? "Prepare the luggage carefully!😀"
          : packed === total
          ? "All packed, ready to enjoy the vacation!😍"
          : ` In total: ${total} items,  already packed:${packed}/${total}`}
      </p>
    </footer>
  );
}
export default PackingList;
