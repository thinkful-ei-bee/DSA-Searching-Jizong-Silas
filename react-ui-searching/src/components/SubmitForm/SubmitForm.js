import React,{Component} from 'react'

export default class SubmitForm extends Component{
  handleSubmit =(ev)=>{
    ev.preventDefault()
    const array = ev.target
    
  }
  
  render(){
    return(
      <div className='submit_form_container'>
      <form onSubmit={this.handleSubmit} className='submit_form'>
        <textarea className='submit_form_content'/>
        <button type='submit' className='submit_form_button'>
            Find Out
        </button>
      </form>
      </div>
    )
  }
}