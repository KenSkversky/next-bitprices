import { useState } from 'react';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Prices from '../components/Prices';

const Index = ({ bpi }) => (
  <Layout>
    <div>
      <h1>Welcome to Bitprices</h1>
      <Prices bpi={bpi} />
    </div>
  </Layout>
);
export async function getStaticProps() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    props: {
      bpi: data,
    },
  };
}
export default Index;
