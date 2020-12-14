import React from "react";

export default function Icons() {
  let icon_text = [
    "viber (2).png",
    "whatsapp.png",
    'telegram.png'
  ]
  return (
    <div className="icons_title">
      <div className="title">
        <a>Записаться на курс</a>
      </div>
      <div className="icons">
        {icon_text.map(iconUrl => {
          return <div className="icon">
            <a href="">
              <img src={iconUrl}/>
            </a>
          </div>
        })}
      </div>
    </div>
  )
}
