import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Components/Layout';
import Nature from './Pages/HomePages';
import Recycling from './Pages/HomePages/Recycling';
import AboutPage from './Pages/AboutPage/AboutPage';
import Services from './Pages/ServicePages/Services';
import Campaigns from './Pages/Campaigns/Campaigns';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import CustomCursor from './Components/CustomCursor/CustomCursor';
import ScrollUpButton from './Components/ScrollUpButton';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';
function App() {
  const { pathname } = useLocation();
  Aos.init({
    duration: 900,
    delay: 0.2,
    once: true,
    disable: function () {
      return window.innerWidth < 768;
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* home page  */}
          <Route index element={<Nature />} />
          <Route path="/recycling" element={<Recycling />} />
          {/* other page  */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Campaigns />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <CustomCursor />
      <ScrollUpButton />
    </>
  );
}

export default App;
