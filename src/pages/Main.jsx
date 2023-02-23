import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Layout from '../components/Layout';

function Main()  {
  const navigate = useNavigate();

  return (
    <Layout>
      <Header />
      <StHtag> MENU</StHtag>
      <Stdiv>
        <StMaintbtn onClick={()=> {navigate("/input");}}> ✏️ Add Todo </StMaintbtn>
      </Stdiv>
      <Stdiv>
        <StMaintbtn onClick={()=> {navigate("/list");}}> 🔎 All-Todo-List </StMaintbtn>
      </Stdiv>
    </Layout>
  )
}

export default Main;

const StHtag = styled.h1 `
  padding-left: 20px;
  color : gray;
  margin : 0px auto;
`

const StMaintbtn = styled.button `
  margin : 20px;
  padding : 20px;
  width : 50rem;
  height : 9rem;
  font-size : 4rem;
  /* border : none; */
  border-color: #dddddd;
  border-radius : 20px;
  background-color : #dddddd;
  cursor : pointer;
  text-align : center;
`

const Stdiv = styled.div `
  padding : 0 auto;
  margin : 0 auto;

`
