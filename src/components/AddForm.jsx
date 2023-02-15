import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { AddTodo } from '../redux /modules/Todos'
import nextId from "react-id-generator";
import styled from 'styled-components'

function AddForm () {
  const id = nextId();
  const [todo, setTodo] = useState({
    id:0,
    title : '',
    content : '',
    isDone : false
  });

  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    const {name, value} = event.target ;
    setTodo ({...todo, [name]: value});
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(todo.title.trim() === "" || todo.content.trim()=== "") {
      alert("Please fill in the all-blank!");
      return;
    }
    //todo.title.trim() 앞에 todo 꼭 넣어주기!!

    dispatch(AddTodo({...todo, id}));
    setTodo({
      id : 0,
      title : '',
      content :'',
      isDone : false,
    });
  };

  return (
  <StFormContainer onSubmit={onSubmitHandler} >
      <StLabel> Title </StLabel>
        <StInput
          type ='text'
          name = 'title'
          value = {todo.title}
          onChange = {onChangeHandler}
        />
      <StLabel> Content </StLabel>
        <StInput
          type ='text'
          name = 'content'
          value = {todo.content}
          onChange = {onChangeHandler}
        />

      <StButton> Add </StButton>
      
  </StFormContainer>
  )
}

export default AddForm

const StFormContainer = styled.form `
  font-size: 30px;
  align-items: center;
  font-weight: bold;
  margin: 10px;
  display: flex;
  gap: 15px;
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
  width : 350px;
  height: 30px;
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
