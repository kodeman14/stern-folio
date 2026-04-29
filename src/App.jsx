import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Home from "./components/pages/Home";
// import ContactMe from "./components/connect/ContactMe";
// import Testimonials from "./components/connect/Testimonials";
// import NotFound from "./components/Error404";

import { allSiteData, personalData } from "./data/index";
// import "./App.css";

export default function App() {
  return (
    <>
      <Header allSiteData={allSiteData} jsonData={personalData} />
      <main>
        <Home />
      </main>
      {/* <ContactMe jsonData={contactData} /> */}
      <Footer allSiteData={allSiteData} jsonData={personalData} />
    </>
  );
}
