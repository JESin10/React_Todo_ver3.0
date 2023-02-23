import React, { useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import { __getTodoAboutThunk, __editTodoThunk } from '../redux /modules/Todos';
import Layout from '../components/Layout';


function About () {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const todoList = useSelector((state) => state.todos.todos);
  const todo_Title = useSelector((state) => state.todos.todos.title);
  const todo_Content = useSelector((state) => state.todos.todos.content);
  const todo_Name = useSelector((state) => state.todos.todos.username);

  const [updateTodo, setUpdateTodo] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect (()=> {
    dispatch ( __getTodoAboutThunk(id) );
  }, [dispatch, id]);

  const onSaveBtnHandler = () => {
    if(updateTodo.trim() === ''){
      return alert ('내용을 입력하세요')
    }
    dispatch(
      __editTodoThunk({
        ...todoList,
        content : updateTodo,
      })
    );
    setIsEditMode(false);  
  }

  return (
    <StContainer>
    <Header />
    <Layout>
      <StDetail>
        {/* 상세페이지영역 */}
        <div name='basic'>
          <Stdeid> id : {id}</Stdeid>
          <Stdecontent> name : {todo_Name} </Stdecontent>
          <Stdetitle> title : {todo_Title} </Stdetitle>
        </div>
        {/* 수정영역 */}
        <div name='edit-mode'>
          {isEditMode? (
            <>
              <StTxtarea
                type='text'
                name='content'
                value={updateTodo}
                onChange={(event)=> {
                  setUpdateTodo(event.target.value);
              }} />
            </>
          ) : (
            <Stdetitle> content : {todo_Content} </Stdetitle>
          )
        }
        </div>
        {/* 버튼영역 */}
        <div name= 'btns'>
        {isEditMode? (
          <>
            <Stprebtn className="editbitn" onClick={onSaveBtnHandler}> 저장 </Stprebtn>
          </>
        ):(
          <>
            <Stprebtn onClick={()=> {navigate("/list");}}> 이전으로 </Stprebtn>
            <Stprebtn className="editbitn" onClick={()=> setIsEditMode(true)}> 수정 </Stprebtn>
          </>
        )}
        </div>
        
      </StDetail>
      </Layout>
    </StContainer>
  )
}

export default About;

const StContainer = styled.div `
  max-width : 1200px;
  min-width : 800px;
  height : 500px;
  border-radius : 10px;
  margin : auto;
  background-color: #f2f2f2;

`
const StDetail = styled.div`
  width : 800px;
  height: auto;
  border-radius: 20px;
  background-color: #dddddd;
  padding: 15px;
  margin: 50px auto;
`

const Stdeid = styled.div `
  color : #009227;
  padding: 10px 20px;
  font-weight: bold;
`

const Stdetitle = styled.div `
  /* background-color : gray; */
  font-size : 35px;
  font-weight : bold;
  padding: 10px 20px;
  text-align-last : start;
  word-wrap: break-word;
`
const Stdecontent = styled.div `
  /* background-color : greenyellow; */
  font-size : 25px;
  color : #717171;
  padding: 10px 20px;
  text-align-last : start;
  word-wrap: break-word;
`

const Stprebtn = styled.button `
  width : 8rem;
  height: 40px;
  font-size : 20px;
  font-weight: bold;
  color:  #009227;
  border: none;  
  border-radius: 10px;
  margin: 0 30px 20px 30px;
  cursor : pointer;
`

const StTxtarea = styled.textarea`
  font-size : 30px;
  margin : 20px 35px;
  height : 20rem;
  width : 45rem;
  border : none;
  border-radius : 20px;
  padding : 10px;
`