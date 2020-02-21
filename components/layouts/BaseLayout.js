import React, { useEffect } from 'react';
import Header from '../shared/header';
import Head from 'next/head';

export default function BaseLayout(props) {
  useEffect(() => {
    console.log('aaaaa ===', props);
  }, []);

  return (
    <>
      <Head>{props.title ? <title>{props.title}</title> : null}</Head>
      <Header />
      {props.children}
    </>
  );
}
