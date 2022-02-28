// import { useState } from "react";

import Menu from "./components/Menu";
// import Header from "./components/Header";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";

export default function App() {
  // const [showMenu, setShowMenu] = useState(false);

  // const toggleMenu = () => {
  //   document.body.style.overflow = showMenu ? "auto" : "hidden";
  //   setShowMenu(!showMenu);
  // };

  return (
    <div>
      <Menu position="right">
        <div className="p-4">Parlour</div>
      </Menu>
    </div>
  );
}
