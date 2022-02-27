import { useState } from "react";

import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
// import MenuOverlay from "./components/MenuOverlay";
// import Header from "./components/Header";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    document.body.style.overflow = showMenu ? "auto" : "hidden";
    setShowMenu(!showMenu);
  };

  const topMenuHight = "70px";

  return (
    <div className="relative">
      <TopBar menuHeight={topMenuHight} />
      <SideBar menuHeight={topMenuHight} onOpenMenu={toggleMenu} />

      {/* <div className="pt-8">
        <Header></Header>
        <Testimonials />
      </div>
      <Footer /> */}
      {/* {showMenu && <MenuOverlay onCloseMenu={toggleMenu} />} */}
    </div>
  );
}
