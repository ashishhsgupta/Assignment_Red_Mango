import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Assignment1 from './components/Assignment1';
import Assignment2 from './components/Assignment2';
import Assignment3 from './components/Assignment3';
import Assignment4 from './components/Assignment4';
import Assignment4Step2 from './components/Assignment4Step2';
import Assignment4Step3 from './components/Assignment4Step3';
import Assignment5Step1 from './components/Assignment5Step1';
import Assignment5Step2 from './components/Assignment5Step2';
import Assignment5Step3 from './components/Assignment5Step3';
import Assignment6Step1 from './components/Assignment6Step1';
import Assignment6Step2 from './components/Assignment6Step2';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Assignment1 />} />
      <Route path='/assignment2' element={<Assignment2 />} />
      <Route path='/assignment3' element={<Assignment3 />} />
      <Route path='/assignment4' element={<Assignment4 />} />
      <Route path='/assignment4Step2' element={<Assignment4Step2 />} />
      <Route path='/assignment4Step3' element={<Assignment4Step3 />} />
      <Route path='/assignment5Step1' element={<Assignment5Step1 />} />
      <Route path='/assignment5Step2' element={<Assignment5Step2 />} />
      <Route path='/assignment5Step3' element={<Assignment5Step3 />} />
      <Route path='/assignment6Step1' element={<Assignment6Step1 />} />
      <Route path='/assignment6Step2' element={<Assignment6Step2 />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
