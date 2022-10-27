import React from 'react'
import Header from '../components/Header';
import Banner from "../components/Banner";
import MostPopular from "../layout/MostPopular";
import CountryLeagues from "../layout/CountryLeagues";
import Collection from "../layout/Collection";
import SubCollection from '../layout/SubCollection';
import Footer from '../layout/Footer' 




export default function Home() {
  return (
    <>
        <Header/>
        <Banner />
        <MostPopular/>
        <CountryLeagues />
        <Collection/>
        <SubCollection/>
        <Footer/>
    </>
  )
}
