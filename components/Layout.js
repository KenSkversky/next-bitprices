import Navbar from './Navbar';
import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <title>Bitcoin Pricing</title>
      <meta name='author' content='ken skversky @kenskversky.com' />
      <link
        rel='stylesheet'
        href='https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/cerulean/bootstrap.min.css'
      />
    </Head>
    <Navbar />
    <div className='container'>{props.children}</div>
  </div>
);
export default Layout;
