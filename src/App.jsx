import React from "react";
import Apartments from "./components/Apartments";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function App() {
  const [category, setCategory] = React.useState("shared");
  return (
    <div>
      <Nav />
      <Filters setCategory={setCategory} />
      <Apartments category={category} />
      <Footer />  
    </div>
  );
}
