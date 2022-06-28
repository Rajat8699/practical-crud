import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import AddEditPost from "./pages/AddEditPost";
import Homepage from "./pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Toaster position="top-right" />
      <div className="container mx-auto my-10">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/posts/:id" element={<AddEditPost />} />
          <Route path="/post/add" element={<AddEditPost />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
