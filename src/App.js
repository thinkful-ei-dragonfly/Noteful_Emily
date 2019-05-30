import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Folder from './Folder';
import Note from './Note';
import Main from './Main';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header>
          <h1 className='header'><Link to='/'>Noteful</Link></h1>
          
        </header>
        <main>
          <Route exact path='/' component={Main} />   
          <Route path='/folder/:folderId' component={Folder} />
          <Route path='/note/:noteId' component={Note} />
      
        </main> 
      </div>
    )
  }

}


export default App;