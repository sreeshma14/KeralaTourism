import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Places from './componets/Places';
import Placeview from './componets/Placeview';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Places />} />
        <Route path='view-places/:id' element={<Placeview />} />
      </Routes>
      <Places></Places>
      <Placeview></Placeview>
      <Footer />
    </div>
  );
}

export default App;
