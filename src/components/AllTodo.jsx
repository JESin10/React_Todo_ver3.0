import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { DeleteTodo, EditTodo} from '../redux /modules/Todos'
import { Link } from 'react-router-dom'

function AllTodo() {
  const dispatch = useDispatch();
  const {todos} = useSelector((state) => state.todos);
  console.log(todos)

  const onDelete = (id) => {
    dispatch(DeleteTodo(id));
  }

  const onEdit = (id) => {
    dispatch(EditTodo(id));
  }

  return (
    <StAllTodo>
    <h2 className="cardlist"> I'm still Working🔥 </h2>
    <StWorkingTodo>
      {todos.map ((todo) => {
        if(!todo.isDone) {
          return (
            <StTodo key= {todo.id}> 
              <StLink to={`/${todo.id}`} key={todo.id}> 
                <div> About </div> 
              </StLink>
              <div>
                <StTitle > {todo.title}  </StTitle>
                <StContent> {todo.content}  </StContent>
              </div>
              <div>
                <StDeleteBtn className="delbtn" onClick={()=> onDelete(todo.id)}> Delete </StDeleteBtn>
                <StEditeBtn className="editbtn" onClick={()=> onEdit(todo.id)}> {todo.isDone? 'Cancle' : 'Complete'} </StEditeBtn>
              </div>
            </StTodo> 
          )} else {
            return null;
          }
      })}
    </StWorkingTodo>  

    <h2 className="cardlist"> It's already Done👏</h2>
    <StDoneTodo>
      {todos.map ((todo) => {
        if(todo.isDone) {
          return (
            <StTodo key= {todo.id}> 
              <StLink to={`/${todo.id}`} key={todo.id}> 
                <div> About </div> 
              </StLink>
              <div>
                <StTitle > {todo.title}  </StTitle>
                <StContent> {todo.content}  </StContent>
              </div>
              <div>
                <StDeleteBtn className="delbtn" onClick={()=> onDelete(todo.id)}> Delete </StDeleteBtn>
                <StEditeBtn className="editbtn" onClick={()=> onEdit(todo.id)}> {todo.isDone? 'Cancle' : 'Complete'} </StEditeBtn>
              </div>
            </StTodo> 
          )} else {
            return null;
          }
      })}
    </StDoneTodo>
    </StAllTodo>
  );
}

export default AllTodo

const StAllTodo = styled.div `
  padding: 15px;
`
const StLink = styled(Link)`
  color : gray;
  text-decoration: none;
  font-weight : bold;
  cursor : pointer;
`

const StTodo = styled.div `
  width : 250px;
  height: auto;
  border-radius: 20px;
  background-color: #dddddd;
  padding: 15px;
  margin: 10px;
`

const StDoneTodo = styled.div `
  display: flex;
  gap : 12px;
  flex-wrap : wrap;
`

const StWorkingTodo = styled.div `
  display: flex;
  gap : 12px;
  flex-wrap : wrap;
`

const StTitle = styled.div `
  font-size: 25px;
  width : 250px;
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

const StEditeBtn = styled.button `
  width : 80px;
  height: 30px;
  margin: 5px 10px;
  font-weight: bold;
  border-radius: 10px;
  color: #003366;
  border: none;
  cursor : pointer;
`

const StDeleteBtn = styled.button `
  width : 80px;
  margin: 5px 0px;
  height: 30px;
  border-radius: 10px;
  font-weight: bold;
  color:  #990000;
  border: none;  
  cursor : pointer;
`