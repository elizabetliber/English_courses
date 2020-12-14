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
        <title>liesel</title>
        {/*<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>*/}
        {/*<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>*/}
      </Head>
      <Navbar/>
      <BodyText/>
      <Button/>
      <Comments/>
      {/*<Form/>*/}
      {/*<iframe width={600} height={900} src="https://forms.gle/5J2rhrKEVZmHPNYB8"></iframe>*/}
    </div>
  )
}
export default Index
