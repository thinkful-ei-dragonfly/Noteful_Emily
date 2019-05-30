import React from 'react';
import './Note.css'


export default class Note extends React.Component {
  render() {
    return (
    <div className='notes'>
      <div>Note 1<button>Delete</button></div>
      <div>Note 1<button>Delete</button></div>
      <div>Note 1<button>Delete</button></div>
      <div>Note 1<button>Delete</button></div>
    </div>
    )
  }
}