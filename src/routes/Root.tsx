import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { globalCss } from "../../stitches.config";

const globalStyles = globalCss({
  ":root": { margin: 0, padding: 0, backgroundColor: "AntiqueWhite" },
});

const App = () => {
  globalStyles();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
