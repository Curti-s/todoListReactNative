/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import List from './components/List';
import Title from './components/Title';
import Input from './components/Input';

import {actionCreators} from './redux/todoListReducer';

const mapStateToProps = state => ({
  todos: state.todos
})

class App extends React.Component {
  onAddTodo = text => {
    const {dispatch} = this.props;
    dispatch(actionCreators.add(text));
  }

  onRemoveTodo = index => {
    const {dispatch} = this.props;
    dispatch(actionCreators.remove(index))
  }

  render() {
    const {todos} = this.props;

      <View
        <Title>Todo List</Title>
        <Input 
          placeholder={'Type todo, then press Enter'}
          onSubmitEditing={this.onAddTodo}
        />
        <List 
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
  }
}

export default connect(mapStateToProps)(App);

