import logo from './logo.svg';
import './App.css';
import { Signup } from './component/Signup';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className = "App">
      <Signup/>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </div>   
  );
}

export default Signup;
