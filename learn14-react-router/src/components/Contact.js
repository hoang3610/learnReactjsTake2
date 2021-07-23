import React, {Component} from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component{
  constructor(props){
    super(props)
    this.state = {
      isChecked: false
    }
  }
  onClick = (isChecked) => {
    this.setState({
      isChecked: isChecked
    })
  }
  render(){
    var {isChecked} = this.state;
    return (
      <div>Day la trang lien he
      
        <button type="button" class="btn btn-info" onClick={()=>this.onClick(false)}>cho phép</button>
        <button type="button" class="btn btn-info" onClick={()=>this.onClick(true)}>không cho phép</button>
        <Prompt 
          when={isChecked}
          message={location=> (`ban co chac chan muon di den ${location.pathname}`)}
        />
      </div>
    )
  }
}

export default Contact;
