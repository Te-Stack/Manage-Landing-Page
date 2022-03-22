import Head from 'next/head'
import CTA from '../components/cta/Cta'
import Navbar from "../components/navbars/Navbar"

 

export default function Home() {
  return (
    <>

      <Head>
          <title>Let Explore|| Let Build</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar/>
      <CTA/>
      

        


    </>
  )
}
