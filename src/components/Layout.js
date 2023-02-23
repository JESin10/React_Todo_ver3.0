import React from 'react'
import styled from 'styled-components'

function Layout(props) {
  return <StLayout> {props.children} </StLayout>;
  // 레이아웃으로 묶어주고 프롭스 내려주기
}

export default Layout;

const StLayout = styled.div `
  max-width: 1200px;
  min-width: 800px;
  /* height: 1500px; */
  height: auto;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: #f5f5f5;
  /* background-color : blue; */
  border-radius: 10px;
`