import logo from './logo.svg';
import './App.css';
import { Counter } from './component/Counter';
import Greet from './component/Greet';
import EventBind from './component/EventBind';
import UserGreet from './component/UserGreet';
import Lec3 from './component/Lec3';
import ParentComp from './component/ParentComp';
import CartList from './component/CartList';
import Lec4 from './component/Lec4';
import Lec5 from './component/Lec5';
import NameList from './component/NameList';
import useCallBack from './component/useCallBack';
import Inline from '../../ecart/src/Components/Inline';
function App() {
  const user="Abhiram";
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Counter/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Greet name='Diana'/>
      <EventBind/> */}
      {/* <UserGreet/> */}
      {/* <Lec3/> */}
      {/* <ParentComp/> */}
      {/* <Lec4 user={user}/> */}
      {/* <Lec5/> */}
      {/* <CartList/> */}
      {/* <NameList/> */}
      {/* <useCallBack/> */}
      <Inline/>
    </div>
  )
}

export default App;
