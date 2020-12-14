import React from "react"
import {Nav, Navbar} from "react-bootstrap";

export default function Header(){
  return(
    <div className="header">
      <div className="header_logo">
        {/*<div className="header_img">*/}
        {/*<img src="гора-2.png" alt=""/>*/}
        {/*</div>*/}
        <div className="header__title">
          <div className="text">
            EgMountain<img src="гора-2.png" alt=""/>
          </div>
          <div className="text">
            Покоряй новые вершины, изучая английский вместе со мной!
          </div>
        </div>
      </div>
      <Navbar>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Обо мне</Nav.Link>
          <Nav.Link href="#features">Проверь себя</Nav.Link>
          <Nav.Link href="#pricing">Записаться на пробное занятие</Nav.Link>
          <Nav.Link href="#pricing">Связаться с нами</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}
