import React from 'react'
import Header from './Header';
import Layout from '../components/Layout';
import ListForm from '../components/ListForm';
import About from './About';

function List() {
  return (
    <Layout>
      <Header />
      <ListForm>
        <About />
      </ListForm>
    </Layout>
  );
}

export default List