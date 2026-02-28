import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JobProvider } from "./context/JobContext";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import JobDetails from "./pages/JobDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <JobProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex justify-center">
          
          {/* Main Content Wrapper */}
          <div className="w-full max-w-6xl">
            <Navbar />
            
            <div className="px-6 py-10">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add" element={<AddJob />} />
                <Route path="/job/:id" element={<JobDetails />} />
              </Routes>
            </div>
          </div>

        </div>
      </Router>
    </JobProvider>
  );
}

export default App;