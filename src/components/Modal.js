import React from 'react';
import styled from 'styled-components';
import '../../src/css/Modal.css';

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <Stsection>
          <Stheader>
            {header}
            <Stclosebtn className="close" onClick={close}>
              &times;
            </Stclosebtn>
          </Stheader>
          <Stmain>{props.children}</Stmain>
          <Stfooter>
            <Stconfirmbtn className="close" onClick={close}>
              confirm
            </Stconfirmbtn>
          </Stfooter>
        </Stsection>
      ) : null}
    </div>
  );
};

export default Modal;

const Stsection = styled.section `
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: modal-show 0.3s;
  overflow: hidden;
`

const Stmain = styled.main`
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`

const Stfooter = styled.footer`
  padding: 12px 16px;
  text-align: right;
`

const Stheader = styled.header`
  position: relative;
  padding: 16px 64px 16px 16px;
  background-color: #f1f1f1;
  font-weight: 700;
`

const Stclosebtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: #999;
  background-color: transparent;
  cursor : pointer;
  `

  const Stconfirmbtn = styled.button `
  padding: 6px 12px;
  color: #fff;
  background-color: #6c757d;
  border-radius: 5px;
  font-size: 13px;
  `