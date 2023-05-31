import { styled } from "../../stitches.config";
import MenuLink from "./MenuLink";

const Style = styled("header");

const Header = () => {
  return (
    <Style>
      <h1>200 years of Political Economy</h1>
      <nav>
        <MenuLink to="">Timeline</MenuLink>
        <MenuLink to="index">Alphabetical index</MenuLink>
      </nav>
    </Style>
  );
};

export default Header;
