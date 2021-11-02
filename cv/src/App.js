import './App.css';
import ABOUT from './components/ABOUT';
import WORK_EXPERIENCE from './components/WORK_EXPERIENCE';
import SKILLS from './components/SKILLS';
import EDUCATION from './components/EDUCATION';
import Profile from './components/Profile';
const App = ()=> {
  return (
    <div className="row"> 
    <div className="column" id="prof">
      <ABOUT/>
      <WORK_EXPERIENCE/>
      <SKILLS/>
      <EDUCATION/>
    </div> 
    <div className="column" id="pro"><Profile/></div>
    </div>
    
  );
}

export default App;
