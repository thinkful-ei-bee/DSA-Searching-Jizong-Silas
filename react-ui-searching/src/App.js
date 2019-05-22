import React,{Component} from 'react';
import './App.css';
import SearchAlgo from './util/searchFunction'
import data from './util/dataStore'

class App extends Component {
state = {
 data:data.split(' ').map(num=>Number(num)).sort()
}


render(){
  
  console.log(this.state.data,'test data')
  

  return (
    <div className="App">
         
    </div>
  );
}
  
}

export default App;
