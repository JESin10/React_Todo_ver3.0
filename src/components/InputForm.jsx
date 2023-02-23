import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __addTodoThunk, __getTodoThunk } from '../redux /modules/Todos'
import styled from 'styled-components'
import Button from '../element/Button';
import { useNavigate } from 'react-router-dom';

function InputForm () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isSuccess} = useSelector((state) => state.todos);
  const res = useSelector((state) => state.todos);
  console.log(res.isSuccess)

  const [newTodo, setNewTodo] = useState(
    {username : '',
    title : '',
    content : '',
    // isSuccess : false,
    }
  );
  
  // useEffect(() => {
  //   if(!isSuccess) return;
  //   if(isSuccess) navigate('/list');
  //   return () => dispatch(__getTodoThunk(isSuccess));
  // },[dispatch, isSuccess, navigate])

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
      // isSuccess : false,
    });
  };

  return (
    <StFormContainer onSubmit={onSubmitHandler} >
      <div>
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
      </div> 

      <StLabel> Content </StLabel>
      <div>
        <StContentArea
          type ='text'
          name = 'content'
          value = {newTodo.content}
          onChange = {onChangeHandler}
        />
      </div>
      <StbtnContainer>
      <Button size='small_ver2'> Add Todo </Button>
      <Button size='small_ver2' onClick={()=> {navigate("/list");}}> Go to Todo-List ↩︎ </Button>
      </StbtnContainer>
    </StFormContainer>
    )
}

export default InputForm;

const StFormContainer = styled.form `
  font-size: 30px;
  align-items: center;
  font-weight: bold;
  margin: 10px;
  /* display: flex; */
  gap: 15px;
  /* height: 100%;
  width : 100%; */
`;

const StLabel = styled.label `
  font-weight : bold;
  font-size : 25px;
  padding : 30px
`

const StInput = styled.input `
  width : 400px;
  height: 30px;
  border-radius: 30px;
  padding: 10px;
  margin: 10px;
  background-color: #dddddd;
  border: none;
  font-size : 20px;
`

const StContentArea = styled.textarea`
  overflow-wrap: break-word;
  font-size : 30px;
  height : 30rem;
  width : 63rem;
  border : none;
  border-radius : 20px;
  padding : 20px;
  margin : 20px auto;
  display : block;

` 

const StbtnContainer = styled.div`
  display : flex;
  text-align : center;
  padding : 20px;
`