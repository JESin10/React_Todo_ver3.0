import React from 'react';
import InputForm from '../components/InputForm';
import ListForm from '../components/ListForm';
import Header from './Header';
import Layout from '../components/Layout';

function Input () {
  return (
    <Layout>
      <Header />
      <InputForm />
      {/* <ListForm /> */}
    </Layout>
  );
};

export default Input;

