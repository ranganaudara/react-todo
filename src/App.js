import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';
class App extends Component {
  state = {
    todos : [
      {id:1, content: "Get some sleep! "},
      {id:2, content: "Get some sleep! "}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
     todo.id = Math.random();
     let todos = [...this.state.todos , todo]
     this.setState({
       todos
     });
  }
  render(){
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo}/>
        <AddTodo addNew = {this.addTodo}/>
      </div>
    );
  }
}

export default App;