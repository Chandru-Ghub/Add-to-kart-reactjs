import './App.css';
import Header from './Header';
import Content from './Content';
import {useState} from 'react';
import Footer from './Footer';
function App() {
    let bg =[];

  return (
    <div className='App'>
    {/* <Header 
    setCount={setCount}
    count = {count}
     /> */}
    <Content

    />
    <Footer
    
    />
    </div>
  );
}
Header.defaultProps = {
  title:'Shopping Now'
}
export default App;
