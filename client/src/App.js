import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Home, ServiceOne, Apply, GetCertificate } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service-one" element={<ServiceOne />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/certificate" element={<GetCertificate />} />
        </Routes>
      </div>
    </Router>
    // <div>
    //   <Routes>
    //     <Route path='/' element={<Home/>}></Route>
    //     <Route path='/service-one' element={<ServiceOne/>}></Route>
    //   </Routes>
    // </div>
  );
}

export default App;
