import React from "react";
import Apartments from "./components/Apartments";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Apartments as Homes } from "./utils/Apartments";

export default function App() {
  const [allApartments, setAllApartments] = React.useState(
    Homes
  );
  const [apartments, setApartments] = React.useState(
    allApartments.filter((apt) => apt.category === "shared")
  );
  const LikeApartment = (name) => {
    setApartments(apartments.map(apt=>{
      return {
        name: apt.name,
        url: apt.url,
        category: apt.category,
        liked: apt.name===name && !apt.liked ? true : apt.name!==name && !apt.liked ? false : true
      }
    }))
    setAllApartments(allApartments.map(apt=>{
      return {
        name: apt.name,
        url: apt.url,
        category: apt.category,
        liked: apt.name===name && !apt.liked ? true : apt.name!==name && !apt.liked ? false : true
      }
    }))
  }
  const UnLikeApartment = (name) => {
    setApartments(apartments.map(apt=>{
      return {
        name: apt.name,
        url: apt.url,
        category: apt.category,
        liked: apt.name===name && apt.liked ? false : apt.name!==name && apt.liked ? true : false
      }
    }))
    setAllApartments(allApartments.map(apt=>{
      return {
        name: apt.name,
        url: apt.url,
        category: apt.category,
        liked: apt.name===name && apt.liked ? false : apt.name!==name && apt.liked ? true : false
      }
    }))
  }
  const handleFilter = (category) => {
    // setCategory(category)
    setApartments(allApartments.filter((apt) => apt.category === category))
  }
  return (
    <div>
      <Nav />
      <Filters handleFilter={handleFilter} />
      <Apartments apartments={apartments} like={LikeApartment} unlike={UnLikeApartment} />
      <Footer />  
    </div>
  );
}
