import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    const {id, text, completed} = this.props.value;

    return (
      <div>
            {id} - <b>{text}</b> - <i> 
            {
                completed ?
                <label><input onChange={()=>this.props.onToggleComplete()} type="checkbox" checked />completed</label>:
                <label><input onChange={()=>this.props.onToggleComplete()} type="checkbox" />not yet</label>
            }</i>
             - <button onClick={() => this.props.onDelete()} >x</button>
        <hr/>
      </div>
    )
  }
}
