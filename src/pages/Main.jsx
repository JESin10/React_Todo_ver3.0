import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Layout from '../components/Layout';
import Button from '../element/Button';

function Main()  {
  const navigate = useNavigate();

  return (
    <Layout>
      <Header />
      <StHtag> MENU</StHtag>
      <Stdiv>
        <Button size='large' onClick={()=> {navigate("/input");}}> ✏️ Add Todo </Button>
      </Stdiv>
      <Stdiv>
        <Button size='large' onClick={()=> {navigate("/list");}}> 🔎 All-Todo-List </Button>
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

const Stdiv = styled.div `
  padding : 0 auto;
  margin : 10px auto 50px auto;
`
