import './App.css';
import LoginComponent from "./components/LoginComponent";
import ProfileComponent from "./components/ProfileComponent";
import ThemeComponent from "./components/ThemeComponent";
import TodoComponent from './components/TodoComponent';


function App() {
  
  return (
    <div className="container">
      <LoginComponent />
      <hr />
      <ProfileComponent />
      <hr />
      <ThemeComponent />
      <hr />
      <TodoComponent/>

    </div>
  );
}

export default App;
