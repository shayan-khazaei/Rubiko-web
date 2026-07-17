import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./Components/Layout";
import Login from "./Pages/Login/Login";
import History from "./Pages/History/History";
import Brand from "./Pages/Brand/Brand";
import News from "./Pages/News/News";
import Home from "./Pages/Home";
import GuideLayout from "./Pages/Guide/GuideLayout";
import Signup from "./Pages/Signup/Signup";
import ScrollToTop from "./Components/ScrollToTop";
import SpeedCubingGuide from "./Pages/Guide/SpeedCubings/SpeedCubings";
import Beginners from "./Pages/Guide/Beginners/Beginners";
import Timer from "./Pages/Guide/Timer/Timer";
import Algorithms from "./Pages/Guide/Algorithms/Algorithms";
import Notation from "./Pages/Guide/Notation/Notation";
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/history" element={<History />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/news-events-more" element={<News />} />
          <Route path="/solution-guides" element={<GuideLayout />}>
            <Route index element={<Beginners />} />
            <Route path="speedcubing" element={<SpeedCubingGuide />} />
            <Route path="algorithms" element={<Algorithms />} />
            <Route path="timer" element={<Timer />} />
            <Route path="notation" element={<Notation />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
