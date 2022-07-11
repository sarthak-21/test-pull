import logo from './logo.svg';
import './App.css';
import Carousel from './Components/Carousel';
import PeekWindow from './Components/PeekWindow';

function App() {
  return (
    <div className="App">
      <PeekWindow />
      <div className="section-title">
            <span className="section-heading">Testimonials</span>
            <span className="section-sub-heading">See what people are saying</span>
      </div>
      <Carousel />
    </div>
  );
}

export default App;
