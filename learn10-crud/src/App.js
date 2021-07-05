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
            tasks: [], // id: unique, name, status
            isDisplayForm: false,
            taskEditing: null,
            filter: {
                name: '',
                status: -1  
            },
            keyword: '',
            sortBy: '',
            sortValue: ''
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
    onToggleForm = () => { // Them task
        if(this.state.isDisplayForm && this.state.taskEditing !== null){
            this.setState({
                isDisplayForm: true,
                taskEditing: null
            })
        }else{
            this.setState({
                isDisplayForm: !this.state.isDisplayForm,
                taskEditing: null
            });
        }
    }
    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        })
    }
    onShowForm = () => {
        this.setState({
            isDisplayForm: true
        })
    }
    onSubmit = (data) => {
        var {tasks} = this.state
        if(data.id === ''){
            data.id = this.generateId();
            tasks.push(data)
        }else {
            // editing
            var index = this.findIndex(data.id);
            tasks[index] = data;
        }
        this.setState({
            tasks: tasks,
            taskEditing: null
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    onUpdateStatus = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id)
        if(index !== -1){
            tasks[index].status = !tasks[index].status
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    }
    findIndex(id){
        var { tasks } = this.state;
        var result = -1;
        tasks.forEach((task, index) => {
            if(task.id === id){
                result = index;
            }
        });
        return result;
    }
    onDelete = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id)
        if(index !== -1){
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks))
            this.onCloseForm();
        }
    }
    onUpdate = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id)
        var taskEditing = tasks[index];
        this.setState({
            taskEditing: taskEditing
        });
        this.onShowForm()
    }
    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10)
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        })
    }
    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }
    onSort = async (sortBy, sortValue) => {
        console.log(sortBy)
        console.log(sortValue)
        await this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        })
        
    }
  render() {
      var {tasks, isDisplayForm, taskEditing, filter, keyword, sortBy, sortValue} = this.state // no se = voi var tasks = this.state.tasks
      if(filter) {
          if(filter.name){
              tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filter.name) !== -1;
            })
          }
          tasks = tasks.filter((task) => {
              if(filter.status === -1){
                  return task
              }else {
                  return task.status === (filter.status === 1 ? true : false)
              }
          });
         
      }
      if(keyword){
        tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(keyword) !== -1;
        })
      }
      if(sortBy === "name"){
        tasks.sort((a,b) => {
            if(a.name > b.name) return sortValue;
            else if(a.name < b.name) return -sortValue;
            else return 0
        })
      } else {
        tasks.sort((a,b) => {
            if(a.name > b.name) return sortValue;
            else if(a.name < b.name) return -sortValue;
            else return 0
        })
      }
      
      var elmTaskForm = isDisplayForm 
                ? <TaskForm 
                    onSubmit={this.onSubmit} 
                    onCloseForm={this.onCloseForm}
                    task={taskEditing}    
                    /> : '';    
    return (
		<div class="container">
        <div class="text-center">
            <h1>Đặt lịch bẻ niềng răng</h1>
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
                    <span class="fa fa-plus mr-5"></span>Đặt lịch đê
                </button>
                <button 
                    type="button" 
                    class="btn btn-danger ml-5" 
                    onClick={this.onGenegrateData}>
                    Generate Data
                </button>
                {/* Search - Sort */}
                <Control 
                    onSearch={this.onSearch}
                    onSort = {this.onSort}
                    />
                <div class="row mt-15">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {/* TaskList */}
                        <TaskList 
                            tasks={tasks} 
                            onUpdateStatus={this.onUpdateStatus}
                            onDelete={this.onDelete}    
                            onUpdate={this.onUpdate}    
                            onFilter={this.onFilter}
                            />
                        {/* <TaskList tasks={tasks}/> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
