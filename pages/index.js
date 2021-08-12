import React from "react"
import Navbar from "../components/Menu/navbar";
import Form from "../components/Menu/form";
import Head from "next/head";
import BodyText from "../components/Body/body_text";
import Button from "../components/Button/button";
import Comments from "../components/Comments/comments";


const Index = () => {
  return (
    <div>
      <Head>
        <title>English Courses</title>
      </Head>
      <Navbar/>
      <BodyText/>
      <Button/>
      <Comments/>
    </div>
  )
}
export default Index
