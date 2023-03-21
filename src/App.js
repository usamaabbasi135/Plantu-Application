import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import SignupLogin from "./pages/SignupLogin";
import ImageUpload from "./pages/ImageUpload";
import Result from "./pages/Result";
import HowWorks from "./pages/HowWorks";
import AboutApp from "./pages/AboutApp";
import Reviews from "./pages/Reviews";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signuplogin":
        title = "";
        metaDescription = "";
        break;
      case "/imageupload":
        title = "";
        metaDescription = "";
        break;
      case "/result":
        title = "";
        metaDescription = "";
        break;
      case "/howworks":
        title = "";
        metaDescription = "";
        break;
      case "/about-app":
        title = "";
        metaDescription = "";
        break;
      case "/reviews":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/signuplogin" element={<SignupLogin />} />
      <Route path="/imageupload" element={<ImageUpload />} />
      <Route path="/result" element={<Result />} />
      <Route path="/howworks" element={<HowWorks />} />
      <Route path="/about-app" element={<AboutApp />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  );
}
export default App;
