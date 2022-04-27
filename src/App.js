import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEvent from './components/Pages/AddEvent/AddEvent';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import VolunteerList from './components/Pages/VolunteerList/VolunteerList';
import Header from './components/Shared/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='/dashboard/volunteers' element={<VolunteerList></VolunteerList>}></Route>
          <Route path='/dashboard/add-event' element={<AddEvent></AddEvent>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
