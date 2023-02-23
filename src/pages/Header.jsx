import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Modal from '../components/Modal';
import Button from '../element/Button';


function Header() {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <StHeader> 
        <React.Fragment>
        <div> 🔴 🟡 🟢  My Todo List </div>
        {/* <div> React ➕ ❏ </div> */}
        <Button size='x_small' onClick={openModal}> ℹ️ </Button>
          {/* header 부분에 텍스트를 입력한다. */}
          <Stmodal open={modalOpen} close={closeModal} header="My Todo-list">
            {/* Modal.js <main> {props.children} </main>에 내용이 입력된다.*/}
            This is my Todo-list! 
          </Stmodal>
        </React.Fragment>
      </StHeader>
      
      <StUnder>
          <Button size='small_ver3' onClick={()=> {navigate("/");}}> Go to Main ↩︎ </Button>
      </StUnder>
    </div>
  )
}

export default Header;

const StHeader = styled.div `
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

const StUnder = styled.div `
  display: flex;
  height : 10px;
  background-color: #f5f5f5;
  align-items: center;
  padding: 15px;
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