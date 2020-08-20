import React from 'react';
import { Redirect } from 'react-router-dom';

import Api from '../../api/ApiUtils';
import Nav from '../../components/Nav';
import List from '../../components/List';
import Modal from '../../components/Modal';
import Button from '../../components/Button';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      isPosting: false,
      showModal: false
    }

    this.nav = [
      { name: 'All', to: '/' },
      { name: 'Active', to: '/active' },
      { name: 'Done', to: '/done' },
    ]

    this.modalData = {};
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

  handleForm = (data, id) => {
    this.toggleFormLoading();
    if (id) {
      this.editTodo(data, id);
    } else {
      this.addNewTodo(data);
    }
  }

  addNewTodo = (data) => {
    Api.post('/todos', data)
      .then(todo => {
        this.toggleModal();
        this.setState({
          todoList: [todo.data, ...this.state.todoList]
        });
      })
      .catch(err => console.log(err))
      .finally(() => this.toggleFormLoading);
  }

  editTodo = (data, id) => {
    Api.put(`/todos/${id}`, data)
      .then(todo => {
        this.handleUpdate(id, todo.data);
        this.toggleModal();
      })
      .catch(err => console.log(err))
      .finally(() => this.toggleFormLoading);
  }

  toggleFormLoading = () => {
    this.setState({
      isPosting: !this.state.isPosting
    });
  }

  toggleModal = (data) => {

    if (data) {
      this.modalData = data;
    } else {
      this.modalData = {};
    }

    this.setState({
      showModal: !this.state.showModal
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

  handleUpdate = (id, data) => {
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
        {this.state.showModal &&
          <Modal submitHandler={this.handleForm} loading={this.state.isPosting} initialData={this.modalData} />
        }
        <div>Home</div>
        <Nav links={this.nav} />
        <div>
          <Button type="button" clickHandler={this.toggleModal}>Add Todo</Button>
        </div>
        <List deleteHandler={this.handleDelete} updateHandler={this.handleUpdate} editHandler={this.toggleModal} list={list} />
      </div>
    );
  }
}

export default Home;
