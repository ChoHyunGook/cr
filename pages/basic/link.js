import React from "react";
import styles from "@/styles/pro.module.css"

export default function Link(){
     return(
          <table className={styles.tab}>
  <tr className={styles.tr}>
    <th className={styles.th}></th>
    <th className={styles.th}>링크명</th>
    <th className={styles.th}>사이트 주소</th>
  </tr>
  <tr className={styles.tr}>
<td className={styles.th}><img 
src="https://m.akbobada.com:444/akbobada/common/Renewal/images/logo.svg" 
width="50"
height="30"/></td>
    <td className={styles.th} href= "">악보바다</td>
    <td className={styles.th}><a href="https://m.akbobada.com:444/" target="_blank" className={styles.text}> https://m.akbobada.com </a></td>
  </tr>
  <tr className={styles.tr}>
  <td className={styles.th}><img 
  src="https://www.akbonara.co.kr/images/ak_logo_1.png" 
  width="50"
  height="30"/></td>
    <td className={styles.th}>악보나라</td>
    <td className={styles.th}><a href="https://www.akbonara.co.kr/?gclid=Cj0KCQjw-JyUBhCuARIsANUqQ_Ji9GtL3XlmwPIaDl2gjbIQbmTvEUP8IwSRHyirHypM-9LcqKCdiKwaAgOGEALw_wcB" target="_blank" className={styles.text}> https://www.akbonara.co.kr </a></td>
  </tr>
</table>
    )
}
