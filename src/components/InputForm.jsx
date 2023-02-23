import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __addTodoThunk, __getTodoThunk } from '../redux /modules/Todos'
import nextId from "react-id-generator";
import styled from 'styled-components'

function InputForm () {

  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState({
    username : '',
    title : '',
    content : '',
    isDone : false
  });
  
  const onChangeHandler = (event) => {
    const {name, value} = event.target ;
    setNewTodo ({...newTodo, [name]: value});
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(newTodo.title.trim() === "" || newTodo.content.trim()=== "") {
      alert("Please fill in the all-blank!");
      return;
    }
    dispatch(__addTodoThunk(newTodo));
    setNewTodo({
      username : '',
      title : '',
      content :'',
      isDone : false,
    });
  };

  return (
    <StFormContainer onSubmit={onSubmitHandler} >
        <StLabel> Name </StLabel> 
          <StInput
            type ='text'
            name = 'username'
            value = {newTodo.username}
            onChange = {onChangeHandler} 
            />

        <StLabel> Title </StLabel>
          <StInput
            type ='text'
            name = 'title'
            value = {newTodo.title}
            onChange = {onChangeHandler}
            /> 


        <StLabel> Content </StLabel>
          <textarea
            type ='text'
            name = 'content'
            value = {newTodo.content}
            onChange = {onChangeHandler}
          />

      <StButton> Add </StButton>
    </StFormContainer>
    )
}

export default InputForm;
// const AREA = styled.textarea`
//   overflow-wrap: break-word;
// `
const StFormContainer = styled.form `
  font-size: 30px;
  align-items: center;
  font-weight: bold;
  margin: 10px;
  display: flex;
  gap: 15px;
  /* direction : column; */
  /* height: 100%;
  width : 100%; */
`;

const StButton = styled.button `
  width : 80px;
  height: 50px;
  margin: 5px;
  border-radius: 30px;
  background-color: #dddddd;
  border: none;
  color: gray;
  font-size: 20px;
  cursor : pointer;
`;

const StInput = styled.input `
  /* width : 350px;
  height: 30px; */
  border-radius: 30px;
  padding: 10px;
  margin: 10px;
  background-color: #dddddd;
  border: none;
`

const StLabel = styled.label `
  font-weight : bold;
  font-size : 25px;
  padding : 10px
`
