import React from "react";
import { isTemplateExpression } from "typescript";
import Item from "./Item";
import style from './List.module.scss'
function List() {
    const item = [{
        tarefa: 'React',
        tempo: '02:00:00',
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00',
    }, 
    ]
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {item.map((item, index) => (
           <Item 
            key={index}
            {...item}
           />
        ))}
        <li>
          <h3> React</h3>
          <span>02:00:00</span>
        </li>
        <li>
          <h3>Javascript</h3>
          <span>01:00:00</span>
        </li>
      </ul>
    </aside>
  );
}

export default List;
