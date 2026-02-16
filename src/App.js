import logo from './logo.svg';
import './App.css';
import MyButton from './components/clickMeButton';
import Welcome from './components/welcome';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
   <Welcome/>
   <Profile/>
   <MyButton/>

   </div>
  );
}
   export default App;