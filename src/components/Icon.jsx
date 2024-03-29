// import { ReactComponent as CreditCard } from "./icons/CreditCard.svg";
import { ReactComponent as Home } from "./icons/Home.svg";
import { ReactComponent as LocationMarker } from "./icons/LocationMarker.svg";
import { ReactComponent as Menu } from "./icons/Menu.svg";
import { ReactComponent as Photograph } from "./icons/Photograph.svg";
import { ReactComponent as Truck } from "./icons/Truck.svg";

export default function Icon({ type, size }) {
  console.log("🚀 ~ file: Icon.jsx ~ line 9 ~ Icon ~ type", type);
  const icons = {
    // CreditCard,
    Home,
    LocationMarker,
    Menu,
    Photograph,
    Truck,
  };
  const SelectedIcon = icons[type];
  const getSize = () => {
    switch (size) {
      case "sm":
        return "w-4 h-4";
      case "md":
        return "w-6 h-6";
      case "lg":
        return "w-8 h-8";
      case "xl":
        return "w-12 h-12";
      default:
        return "w-6 h-6";
    }
  };

  return <SelectedIcon className={getSize(size)} />;
}
