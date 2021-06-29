import React, {Component} from 'react';

class SizeSetting extends Component {
    changeSize(value){
        this.props.onChangeSize(value)
    }
	render(){
		return (
			<div>
                
                <div class="panel panel-warning">
                      <div class="panel-heading">
                            <h3 class="panel-title">Size : {this.props.fontSize}px</h3>
                      </div>
                      <div class="panel-body">
                            <button type="button" class="btn btn-success" onClick={() => this.changeSize(2)} >Tang</button>&nbsp;
                            <button type="button" class="btn btn-success" onClick={() => this.changeSize(-2)}>Giam</button>
                      </div>
                </div>
                
            </div>
		)
	}
}

export default SizeSetting;
