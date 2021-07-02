import React, {Component} from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';

// jsx su ly giao dien 
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            task: [], // id: unique, name, status
            isDisplayForm: false
        }
    }

    componentDidMount(){
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            })
        }
    }

    onGenegrateData = () => {
        var tasks = [
            {
                id: this.generateId(),
                name: 'Hoc lap trinh',
                status: true
            },
            {
                id: this.generateId(),
                name: 'Hoc mua',
                status: true
            },
            {
                id: this.generateId(),
                name: 'Hoc ngu',
                status: false
            }
        ];
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    s4(){
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }
    generateId(){
        return this.s4() + '-' +this.s4() + this.s4() + '-' + this.s4()
    }
    onToggleForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        })
    }
    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        })
    }
    onSubmit = (data) => {
        var {tasks} = this.state
        data.id = this.generateId();
        tasks.push(data)
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    onUpdateStatus = (id) => {
        var { tasks} = this.state;
        console.log(id)
        // var index = this.findIndex(id)
        // if(index !== -1){
        //     tasks[index].status = !tasks[index].status
        // }
    }
    findIndex(){
        console.log("hello")
         
    }
  render() {
      var {tasks, isDisplayForm } = this.state // no se = voi var tasks = this.state.tasks
      var elmTaskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm}/> : '';    
      console.log(tasks)
    return (
		<div class="container">
        <div class="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div class="row">
            <div class={ isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                {/* taskform */}
				{ elmTaskForm }
				{/* <TaskForm /> */}
            </div>
            <div class={ isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                <button type="button" 
                    class="btn btn-primary"
                    onClick={this.onToggleForm}>
                    <span class="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
                <button 
                    type="button" 
                    class="btn btn-danger ml-5" 
                    onClick={this.onGenegrateData}>
                    Generate Data
                </button>
                {/* Search - Sort */}
                <Control />
                <div class="row mt-15">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {/* TaskList */}
                        <TaskList tasks={tasks} onUpdateStatus={this.onUpdateStatus}/>
                        {/* <TaskList /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
