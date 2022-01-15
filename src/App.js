import './App.css';
import { useState } from 'react';
import Select from './components/Multiselect/Multiselect';
import  NewsBoard  from './components/NewsBoard/NewsBoard';
import { Route,Routes} from "react-router-dom";
import Favourites from './components/Favourites/Favourites';
import Fav from './pages/Fav';

function App() {
  const [queryval, setQuery] = useState(''); 
  const d = new Date();
  let text= d.toLocaleString('en-US', {
    weekday: 'short', 
    day: 'numeric', 
    year: 'numeric',
    month: 'long', 
    hour: 'numeric',
    minute: '2-digit'
})
let queryparam =(val) => {
  setQuery(val);
return queryval;
}

  return (
    <div className="App">
      <div className="header"> The News </div>
      <Select query={queryparam}/>
      <div className="margin">
      <div className="subheader">
        <li>Today will be Awesome!</li>
        <li>{text}</li>
        <Fav />
      </div>
      </div>
      <Routes>
        <Route path="favourites" element={<Favourites />} />
        <Route path="/" element={<NewsBoard query={queryval} />} />
        </Routes>    
    </div>
  );
}

export default App;
