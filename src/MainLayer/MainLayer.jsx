import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function MainLayer() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
