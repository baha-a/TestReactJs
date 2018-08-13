import React, { Component } from 'react'
import Todo from "./Todo";


export default class Todos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [],

            addedValue: '',
            visibality: 1,
        };

        this.changeVisibality = this.changeVisibality.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    changeVisibality(value) {
        this.setState({ ...this.state, visibality: value });
    }

    addTodo() {
        const list = this.state.todoList.slice();
        list.push({ id: this.state.todoList.length + 1, text: this.state.addedValue, completed: false });
        this.setState({ ...this.state, todoList: list, addedValue: '' });
    }

    changeInput(event) {
        this.setState({ ...this.state, addedValue: event.target.value });
    }

    toggleComplete(id) {
        const list = this.state.todoList.slice();
        const indx = list.findIndex(x => x.id === id);
        list[indx].completed = !(list[indx].completed);
        this.setState({ ...this.state, todoList: list });
    }
    delete(id)
    {
        const list = this.state.todoList.slice().filter(x=>x.id !== id);
        this.setState({...this.state, todoList:list});
    }

    render() {
        let list;
        if (this.state.todoList != null) {
            if (this.state.visibality === 1) {
                list = this.state.todoList.slice();
            }
            else if (this.state.visibality === 2) {
                list = this.state.todoList.slice().filter(x => x.completed);
            }
            else if (this.state.visibality === 3) {
                list = this.state.todoList.slice().filter(x => !x.completed);
            }
        }
        return (
            <div>
                <input value={this.state.addedValue}
                    onChange={this.changeInput} placeholder="write something" />
                <button onClick={this.addTodo}>Add</button>

                <hr />
                {list.map(x => <Todo key={x.id} value={x} onToggleComplete={() => this.toggleComplete(x.id)} onDelete={() => this.delete(x.id)} />)}
                <hr />
                <button onClick={() => this.changeVisibality(1)}>All</button>
                <button onClick={() => this.changeVisibality(2)}>Completed</button>
                <button onClick={() => this.changeVisibality(3)}>Not Completed</button>
            </div>
        )
    }
}
