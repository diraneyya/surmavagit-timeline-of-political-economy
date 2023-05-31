import { styled } from "../../stitches.config";
import { NavLink } from "react-router-dom";

const Style = styled(NavLink, {
  color: "Black",
});

const MenuLink = ({ to, children }: { to: string; children: string }) => {
  return <Style to={to}>{children}</Style>;
};

export default MenuLink;
