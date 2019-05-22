import React,{Component} from 'react';
import './App.css';
import SearchAlgo from './util/searchFunction'
import data from './util/dataStore'

class App extends Component {
state = {
 data:data.split(' ').map(num=>Number(num)).sort()
}


render(){
  
  //console.log(this.state.data,'test data')
  const linear = SearchAlgo.LinearSearch(this.state.data,34)
  const binaryT = SearchAlgo.binarySearch(this.state.data,34)
  console.log(typeof linear,typeof binaryT,'test algo')

  return (
    <div className="App">
         
    </div>
  );
}
  
}

export default App;
