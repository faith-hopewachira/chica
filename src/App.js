import './App.css';
import Landing from './LandingPage';
import About from './About';
import Episodes from './PodcastPage';
import Navbar from './Navbar';
import WritingSection from './WritingSection';

function App() {
  return (
    <div>
   <Navbar/>
      <Landing/>
      <About/>
       <Episodes/>
       <WritingSection/>
       </div>
  )
}
export default App;