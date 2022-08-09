
import React from 'react'
import { OutputDetails } from '../action'
import styles from "./table.module.css"
type TableProps ={
   data:OutputDetails[]
}
const Table = ({data}:TableProps) => {
  return (
    <div className={styles.tableDiv} >
  <table className="table table-dark table-hover">
  <thead>
    <tr>
      <th scope="col">Model</th>
      <th scope="col">Year</th>
      <th scope="col">OS</th>
      <th scope="col">Screen Height</th>
      <th scope="col">Screen Width</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    {data.map((el)=>(
      <tr key={el.id}>
      <th scope="row">{el.model}</th>
      <td>{el.year}</td>
      <td>{el.os}</td>
      <td>{`${el.screenHeight} inch`}</td>
      <td>{`${el.screenWeidth} inch`}</td>
      <td>{`₹${el.price}`}</td>
     
    </tr>
    ))}
    
  </tbody>
</table>
    </div>
  )
}

export default Table