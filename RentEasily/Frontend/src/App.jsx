import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './Pages/Header/Header.jsx';
import Home from './Components/Home/Home.jsx'
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
