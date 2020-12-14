import React, {useState} from "react";
import Head from "next/head";
import MenuComponent from "./menuComponent";
import {List} from 'react-bootstrap-icons';
import {Button} from "react-bootstrap";
import Header from "../Header/header";
import BodyText from "../Body/body_text";
import BodyCarousel from "../Body/body_carousel";
import Footer from "../Footer/footer";
import Hamburger from "../hamburger_icon/hamburger";
import Form from "./form";
import Navbar from "./navbar";

export default function Menu() {
  const [menuActive, setMenuActive] = useState(false)
  const items = [
    {value: "Обо мне", href: "/main", icon: "alarm"},
    {value: "Проверь себя", href: "/main", icon: "alarm"},
    {value: "Запись на пробное занятие", href: "/main", icon: "alarm"},
    {value: "Отзывы", href: "/main", icon: "alarm"},
    {value: "Связаться с нами", href: "/main", icon: "alarm"},
  ]
  const [wrapper, setWrapper] =useState(false)
  let style="wrapper-menu"
  if(wrapper===true){
    style = style + " open"
  }
  // function Send_email(e) {
  //   let data1 = e.values[1]
  //   let data2 = e.values[2]
  //   GmailApp.sendEmail('адрес получателя', 'Тема письма', 'data1: ' +data1+'data2: '+data2)
  // }
  return (
    <div >
      <Head>
        <title>liesel</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </Head>
     
      {/*<div className="nav">*/}
      
      
      {/*  <div className="navi">*/}
      {/*  kgmjlfkgrjhlkfdg*/}
      {/*  </div>*/}
      {/*  <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>*/}
      {/*      <Hamburger/>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <img src="logoza.ru (9).png" alt=""/>*/}
      {/*  </div>*/}
      <Navbar/> {/*</div>*/}
  
      
        <Form/>
      <iframe width={600} height={900} src="https://forms.gle/5J2rhrKEVZmHPNYB8"></iframe>
     {/*<Footer/>*/}
      {/*<Header/>*/}
      {/*<BodyText/>*/}
      {/*<BodyCarousel/>*/}
        {/*<Hamburger/>*/}
      {/*<MenuComponent active={menuActive} setActive={setMenuActive} items={items}/>*/}
    </div>
  )
  
}
