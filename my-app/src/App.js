import './App.css';
import Navbar from './components/navbar';
import Textform from './components/textform';
function App() {
  return (
    <>
{/* <Navbar title = "Sumit_Negi" about="About us"/> */}
<Navbar title="Sumit_Negi" about="About us"/>
<div className="container my-3">
  
  <Textform heading="Enter your text below"/></div>

    </>
    
  );
} 

export default App;
