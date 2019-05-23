import React,{Component} from 'react';
import './App.css';
import SearchAlgo from './util/searchFunction'
//import data from './util/dataStore'

class App extends Component {
state = {
  error:null,
  search_num:null,
  array:[]
}

handleSubmit =ev=>{
  ev.preventDefault()
  const {search_array,search_number} = ev.target
  console.log(search_array.value,'array',search_number.value)
  const number=search_number.value
  const array = search_array.value
  this.setState({search_num:Number(number),array:array.split(' ').map(num=>Number(num)).sort()})
}

render(){
  
  //console.log(this.state.data,'test data')
  
  console.log(this.state.search_num,'test state number')
  const linear = SearchAlgo.LinearSearch(this.state.array,this.state.search_num)
  const binaryT = SearchAlgo.binarySearch(this.state.array,this.state.search_num)
  const linearStep = linear
  const binaryStep = binaryT[1]+1
  const arrayLength = this.state.array.length
  return (
    <div className="App">
       <div className='submit_form_container'>
      <form onSubmit={this.handleSubmit} className='submit_form'>
      <label>
          Enter Search Number
        
        <input
        name='search_number'
        type='text'
        required
        className='submit_form_search_number'
        >
        
        </input>
        </label>
        <label>
          Input Array
        
        
        <textarea 
          name='search_array'
          type='text'
          required
          className='submit_form_search_array'>
        </textarea>
        </label>
        <button type='submit' className='submit_form_button'>
            Find Out
        </button>
      </form>
      </div>

      <div className='search_result'>
        <div className='array_length'>
        
        </div>
        <div className='error'>
          {}
        </div>
        <div className='algo_step'>
          <div className='linear_step'>
            For Linear Search: {linearStep}
          </div>
          <div className='binary_step'>
            For Binary Search: {binaryStep}
          </div>
          <div className='length_of_array'>
            Length of Array:{arrayLength}
          </div>
        </div>


      </div>  
    </div>
  );
}
  
}

export default App;
