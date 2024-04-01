import "./App.css";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import ForgotPassword from "./components/ForgotPassword";
import BodyPage1 from "./components/BodyPage1";
import Bodypage2 from "./components/BodyPage2";
import MainDashboard from "./components/MainDashboard";

function App() {
  return (
    <main className="">
      <Footer />
      <Navbar />
      <Loader />
      <LoginPage />
      <SignUpPage />
      <ForgotPassword />
      <BodyPage1 />
      <Bodypage2 />
      <MainDashboard />
    </main>
  );
}

export default App;
