import Head from 'next/head'
import Carousels from '../components/carousels/Carousel'
import CTA from '../components/cta/Cta'
import GetStarted from '../components/getstarted/GetStarted'
import Navbar from "../components/navbars/Navbar"
import Track from '../components/track/Track'
import Footer from "../components/footer/Footer"


 

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
      <Track/>
      <Carousels/>
      <GetStarted/>
      <Footer/>
      
      

        


    </>
  )
}
