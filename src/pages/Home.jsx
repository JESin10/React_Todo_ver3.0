import React from 'react';
import AddForm from '../components/AddForm';
import AllTodo from '../components/AllTodo';
import Header from '../components/Header';
import Layout from '../components/Layout';

function Home () {
  return (
    <Layout>
      <Header />
      <AddForm />
      <AllTodo />
    </Layout>
  );
};

export default Home;

