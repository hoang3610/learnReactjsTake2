import React, {Component} from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index'
// import Demo from './training/Demo'

// jsx su ly giao dien 
class App extends Component {
    onToggleForm = () => { 
        var {itemEditing} = this.props;
        console.log(itemEditing)
        if(itemEditing && itemEditing.id !== ''){
            this.props.onOpenForm();
        }
        else{
            this.props.onToggleForm()
        }
        this.props.onClearTask({
            id: "",
            name: "",
            status: false
        })
    }
  render() {
    var { isDisplayForm } = this.props;
    return (
		<div class="container">
        <div class="text-center">
            <h1>Đặt lịch bẻ niềng răng</h1>
            <hr/>
        </div>
        <div class="row">
            <div class={ isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                {/* taskform */}
				<TaskForm />
            </div>
            <div class={ isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                <button 
                    type="button" 
                    class="btn btn-primary"
                    onClick={this.onToggleForm}>
                    <span class="fa fa-plus mr-5"></span>Đặt lịch đê
                </button>
                {/* Search - Sort */}
                <Control />
                <div class="row mt-15">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        isDisplayForm : state.isDisplayForm,
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm : () => {
            dispatch(actions.toggleForm())
        },
        onClearTask : (task) => {
            dispatch(actions.editTask(task))
        },
        onOpenForm : () => {
            dispatch(actions.openForm())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
