import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/ Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/ Dialogs/Message/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
     <Navbar/>
      <div className='app-wrapper-content'>   
      <Route path = '/dialogs' render = {()=><DialogsContainer/>}/>   
      <Route path = '/profile/:userId?' render = {()=><ProfileContainer/>}/>
      <Route path = '/music' render = {()=><Music/>}/>
      <Route path = '/news' render = {()=><News/>}/>
      <Route path = '/settings' render = {()=><Settings/>}/>
      <Route path='/users' render={()=><UsersContainer/>}/>
      
</div>
    </div>
    </BrowserRouter>
  );
}

export default App;
