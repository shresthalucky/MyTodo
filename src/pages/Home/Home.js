import React from 'react';
import { Redirect } from 'react-router-dom';

import Api from '../../api/ApiUtils';
import Nav from '../../components/Nav';
import List from '../../components/List';
import Form from '../../components/Form';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      isPosting: false
    }

    this.nav = [
      { name: 'All', to: '/' },
      { name: 'Active', to: '/active' },
      { name: 'Done', to: '/done' },
    ]
  }

  componentDidMount() {
    if (this.props.token) {
      Api.get('/todos')
        .then(list => {
          this.setState({
            todoList: list.data
          })
        })
        .catch(err => console.log(err));
    }
  }

  handleForm = (title, description) => {
    this.toggleFormLoading();

    const data = {
      title, description, status: 'active'
    }

    Api.post('/todos', data)
      .then(todo => {
        this.setState({
          todoList: [todo.data, ...this.state.todoList]
        });
      })
      .catch(err => console.log(err))
      .finally(() => this.toggleFormLoading);
  }

  toggleFormLoading = () => {
    this.setState({
      isPosting: !this.state.isPosting
    });
  }

  handleDelete = (id) => {
    this.setState({
      todoList: this.state.todoList.filter(todo => {
        if (todo.id === id) return false;
        return true;
      })
    });
  }

  updateHandler = (id, data) => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todo.id === id) return data;
        return todo;
      })
    })
  }

  render() {
    if (!this.props.token) {
      return <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
    }

    let list = this.state.todoList;
    const currentPath = (this.props.location.pathname).split('/')[1];

    if (currentPath === 'active' || currentPath === 'done') {
      list = this.state.todoList.filter(todo => todo.status === currentPath);
    }

    return (
      <div>
        <div>Home</div>
        <Nav links={this.nav} />
        <Form submitHandler={this.handleForm} loading={this.state.isPosting} />
        <List deleteHandler={this.handleDelete} updateHandler={this.updateHandler} list={list} />
      </div>
    );
  }
}

export default Home;
