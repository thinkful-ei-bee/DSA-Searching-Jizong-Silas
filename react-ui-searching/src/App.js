import React,{Component} from 'react';
import './App.css';
import SearchAlgo from './util/searchFunction'
//import data from './util/dataStore'

class App extends Component {
state = {
 array:[]
}

handleSubmit =ev=>{
  ev.preventDefault()
  const {content} = ev.target
  console.log(typeof content.value)
  const array = content.value
  this.setState({array:array.split(' ').map(num=>Number(num)).sort()})
}

render(){
  
  //console.log(this.state.data,'test data')
  const linear = SearchAlgo.LinearSearch(this.state.array,200)
  const binaryT = SearchAlgo.binarySearch(this.state.array,200)
  console.log(linear, binaryT,'test algo')

  return (
    <div className="App">
       <div className='submit_form_container'>
      <form onSubmit={this.handleSubmit} className='submit_form'>
        <textarea 
          name='content'
          type='text'
          required
          className='submit_form_content'>
        </textarea>
        <button type='submit' className='submit_form_button'>
            Find Out
        </button>
      </form>
      </div>  
    </div>
  );
}
  
}

export default App;
