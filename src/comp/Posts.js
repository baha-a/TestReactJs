import React, { Component } from 'react'

export default class Posts extends Component {
constructor(props){
    super(props);
    this.state = {
        posts: [],
        search: ''
    };

    this.changeSearch = this.changeSearch.bind(this);
}

  componentDidMount(){
      fetch("http://jsonplaceholder.typicode.com/posts")
        .then(x => x.json())
        .then(x => this.setState({posts: x}));
  }  

  
  changeSearch(e){
    this.setState({search: e.target.value});
  }
  render() {
      const posts = this.state.posts.filter(p=> p.title.includes(this.state.search)).map(p => 
            <div key={p.id}>
                <b> {p.title} </b>
                <p> {p.body} </p>
                <input type="button" value="dismiss" onClick={()=>
                    this.setState({posts: this.state.posts.filter(x => p.id !== x.id)})
                } />
                <hr />
            </div>
        );
    return (
      <div>
        <input value={this.state.search} onChange={this.changeSearch} />
        <hr />

        {posts}
      </div>
    )
  }
}
