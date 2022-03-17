import Home from "./pages/home/Home";
import Physics from "./pages/physics/Physics"
import Maths from "./pages/maths/Maths";
import Chemistry from "./pages/chemistry/Chemistry"
import Biology from "./pages/biology/Biology"


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />}></Route>
              <Route path="physics" element={<Physics />}></Route>
              <Route path="maths" element={<Maths />}></Route>
              <Route path="chemistry" element={<Chemistry/>}></Route>
              <Route path="biology" element={<Biology />}></Route>
            </Route>
          </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
