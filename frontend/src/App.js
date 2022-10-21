import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MeasurementList from "./components/MeasurementList";
import AddMeasurement from "./components/AddMeasurement";
import EditMeasurement from "./components/EditMeasurement";
import "./App.css"
function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
            <Route path="/" element={<MeasurementList />}>
              
            </Route>
            <Route path="/add" element={<AddMeasurement />}>
            
            </Route>
            <Route path="/edit/:id" element={<EditMeasurement />}>
              
            </Route>
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}

 
export default App;