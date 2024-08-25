import Box from "../components/common/box";
import Header from "../components/common/header";
import Navbar from "../components/common/navbar";
import About from "../components/sections/about";
import Contact from "../components/sections/contact";
import Portfolio from "../components/sections/portfolio";

type Props = {};

const App = (props: Props) => {
  return (
    <Box>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </Box>
  );
};

export default App;
