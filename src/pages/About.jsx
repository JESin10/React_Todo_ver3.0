import React, { useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { DetailTodo } from '../redux /modules/Todos';
import Modal from '../components/Modal';

function About () {
  const dispatch = useDispatch();
  // const {todo} = useSelector((state) => state.todos);
  const todo = useSelector((state) => state.todos.todo);
  //console.log(todo)

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect (()=> {
    dispatch ( DetailTodo(id) );
  }, [dispatch, id]);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <StContainer>
      
      {/* <Stdeheader>
        <div> 🔴 🟡 🟢 My Todo List </div>
        <div> React ➕ ❏ </div>
      </Stdeheader> */}
      
      <Stdeheader> 
        <React.Fragment>
        <div> 🔴 🟡 🟢 My Todo List </div>
        {/* <div> React ➕ ❏ </div> */}
        
          <Stmodalbtn onClick={openModal}>React ➕ </Stmodalbtn>
          {/* header 부분에 텍스트를 입력한다. */}
          <Stmodal open={modalOpen} close={closeModal} header="My Todo-list">
            {/* Modal.js <main> {props.children} </main>에 내용이 입력된다.*/}
            This is my Todo-list! 
          </Stmodal>
        </React.Fragment>
      </Stdeheader>
  


      <StDetail>
        <Stdeid> {id} </Stdeid>
        <Stdetitle> {todo.title} </Stdetitle>
        <Stdecontent> {todo.content} </Stdecontent>
        <Stprebtn onClick={()=> {navigate("/");}}> 이전으로 </Stprebtn>
      </StDetail>
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
  margin: 100px auto;
`

const Stdeid = styled.div `
  color : #009227;
  padding: 10px 20px;
  font-weight: bold;
`
const Stdeheader = styled.div`
  display: flex;
  height : 20px;
  background-color: #e1e1e1;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  width : 100px;
  height: 30px;
  font-size : 15px;
  font-weight: bold;
  color:  #009227;
  border: none;  
  border-radius: 10px;
  margin: 10px 20px;
  cursor : pointer;
`
const Stmodal = styled(Modal) `
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`

const Stmodalbtn = styled.button `
  outline: none;
  cursor: pointer;
  border: 0;
  font-size: 20px;
  background-color : #e1e1e1;
`