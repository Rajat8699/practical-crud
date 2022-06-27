import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";

function App() {
  return (
    <div className="relative min-h-screen bg-swamp">
      {/* <Header /> */}
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;