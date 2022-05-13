import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import $ from 'jquery';

function MyApp({ Component, pageProps }: AppProps) {
  // const width:React.RefObject<any>=React.createRef();
  // let zoom=100;
  // React.useEffect(() => {
  //    width.current.value=$(window).width();
  //   let height:any=$(window).height();
  //   zoom=100-((1668600-(width.current.value*height))/40000)
  //    console.log(zoom);
  //   $(document.body).css('zoom',zoom/100)
  // }, [zoom])
  

  return (
    <>
  <Component {...pageProps} />
  {/* <div ref={width}></div> */}
  </>
  )
}

export default MyApp
