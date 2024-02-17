import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 0,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1
        style={{ color: "red", fontSize: "64px", textTransform: "UpperCase" }}
      >
        Fast React pizza Co.
      </h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div>
        {pizzaData.map((pizzaInfo) => (
          <Pizza pizzaInfo={pizzaInfo} />
        ))}
      </div>
    </main>
  );
}
function Footer() {
  const openHour = 0;
  const closeHour = 22;
  const hour = new Date().getHours();
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00.Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}
function Pizza(props) {
  return (
    <li className={`pizza ${props.pizzaInfo.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaInfo.photoName} alt="Spinachi" />
      <div>
        <h3>{props.pizzaInfo.name}</h3>
        <p>{props.pizzaInfo.ingredients}</p>
        <span>
          {props.pizzaInfo.soldOut ? "SOLD OUT" : props.pizzaInfo.price}
        </span>
      </div>
    </li>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
