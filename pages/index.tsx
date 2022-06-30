import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Easiest way to pay bills">
      <Hero />
    </Layout>
  );
};

export default Home;
