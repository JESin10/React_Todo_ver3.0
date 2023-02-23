import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { __deleteTodoThunk, __getTodoThunk} from '../redux /modules/Todos'
// import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Button from '../element/Button'

function ListForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todoList = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(__getTodoThunk());
  }, [dispatch, todoList.length]);

  const onDelete = (id) => {
    dispatch(__deleteTodoThunk(id));
    dispatch(__getTodoThunk());
  }
  // console.log(todoList)

  return (
    <StAllTodo>
      <h2 className="cardlist"> MY Todo List </h2>
      <StWorkingTodo>
        {todoList.length > 0 && todoList.map ((todo) => {
            return (
              <StTodo key= {todo.id}> 
                <StCard onClick={()=>{
                  navigate(`/${todo.id}`);
                }}>
                <div>
                  <StContent > name : {todo.username}  </StContent>
                  <StTitle > title : {todo.title}  </StTitle>
                  <StContent> content :{todo.content}  </StContent>
                </div>
                </StCard>
                  <Button size='small_ver1' 
                    className="delbtn" 
                    onClick={() => {
                      onDelete(todo.id);
                    }}> Delete </Button>

              </StTodo> 
            )
        })}
      </StWorkingTodo>  
    </StAllTodo>
  )
}

export default ListForm;

const StAllTodo = styled.div `
  padding: 15px;
`
const StCard = styled.div `
  cursor : pointer;
`

const StTodo = styled.div `
  width : 100%;
  height: 10rem;
  border-radius: 20px;
  background-color: #dddddd;
  padding: 15px;
  margin: auto;
`

const StWorkingTodo = styled.div `
  display: flex;
  gap : 12px;
  flex-wrap : wrap;
`

const StTitle = styled.div `
  font-size: 25px;
  width : 100%;
  font-weight: bold;
  padding: 10px 0px;
  text-align-last : start;
  word-wrap: break-word;
`

const StContent = styled.div `
  font-size: 15px;
  padding: 10px 0px;
  text-align-last : start;
  word-wrap: break-word;
`
