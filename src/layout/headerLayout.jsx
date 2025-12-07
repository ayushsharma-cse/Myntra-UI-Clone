import { Outlet } from "react-router-dom";
import Header from "../components/header";

const HeaderLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default HeaderLayout;
