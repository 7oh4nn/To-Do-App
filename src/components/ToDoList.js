import React from 'react';
import Header from './Header';
import Inputfield from './Inputfield';
import ToDoItem from './ToDoItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ToDoList extends React.Component {

  state = {
    todos: [],
    todoToShow: 'all'
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  handleCheckTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

updateTodoToShow = (s) => {
  this.setState({
    todoToShow: s
  })
}

  render() {
    let todos = [];

    if(this.state.todoToShow === 'all') {
      todos = this.state.todos;
    }else if(this.state.todoToShow === 'active') {
      todos = this.state.todos.filter(todo => !todo.complete);
    }else if(this.state.todoToShow === 'complete') {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return(
      <div>
        <Header />
        <main>
          <Inputfield  onSubmit={this.addTodo}/>
          <section>
            <h2>Your To Do List</h2>
            <p>still to do: {this.state.todos.filter(todo => !todo.complete).length}</p>

            <button onClick={() => this.updateTodoToShow("all")}>all</button>
            <button onClick={() => this.updateTodoToShow("active")}>active</button>
            <button onClick={() => this.updateTodoToShow("complete")}>complete</button>
            <ul>
              {this.state.todos.map(
                todo => (
                  <ToDoItem
                    key={todo.id}
                    todo={todo}
                    onCheck={() => this.handleCheckTodo(todo.id)}
                    onDelete={() => this.handleDeleteTodo(todo.id)}
                  />
                )
              )}
                {JSON.stringify(todos)}
            </ul>
          </section>
        </main>
      </div>
    )
  }
}
export default ToDoList;
