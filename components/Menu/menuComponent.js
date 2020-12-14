import React from "react";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

export default function MenuComponent({ items, active, setActive}){
  return(
    <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
      {/*<div className="blur"/>*/}
    <div className="menu__content" onClick={e => e.stopPropagation()}>
      <ul>
        {items?.map((item) => {
          return <li>
            <a href={item.href}>{item.value}</a>
           <AccessAlarmIcon/>
          </li>
        })}
      </ul>
    </div>
    </div>
  )
}
