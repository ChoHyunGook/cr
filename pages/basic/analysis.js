import React from "react";
import styles from "@/styles/pro.module.css"


export default function Analysis(){
     return (
          <dir>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWFOPQ%2FbtrCQwtuxA6%2FOHLJWJgW43Mgkqa3ImCDpk%2Fimg.jpg"
            width="900"
            height="700"/><br/>
          <h5 className={styles.button}>음악 연주 재생해보기</h5>
          <table className={styles.customers}>
          <tr>
               <th></th>
               <th>Contact</th>
          </tr>
  <tr>
    <td>예상 연주시간</td>
    <td>3분 23초</td>
  </tr>
  <tr>
    <td>음표</td>
    <td>2분음표: 4분음표: 8분음표: 16분음표:</td>
  </tr>
  <tr>
    <td>쉼표</td>
    <td>2분쉼표: 4분쉼표: 8분쉼표: 16분쉼표:</td>
  </tr>
  <tr>
    <td>박자</td>
    <td>해당곡은 4분의 3박자 입니다.</td>
  </tr>
  <tr>
    <td>변경된 박자 유/무</td>
    <td>해당곡에선 박자가 변경되지 않았습니다.</td>
  </tr>
  <tr>
    <td>음자리표</td>
    <td>해당곡은 높은음자리표와 낮은 음자리표로 피아노 양손이 연주가 가능합니다.</td>
  </tr>
  <tr>
    <td>조표</td>
    <td>조표는 # 하나 입니다. </td>
  </tr>
  <tr>
    <td>조표 변경 횟수</td>
    <td>해당곡은 연주 중 조표가 변경되지 않았습니다.</td>
  </tr>
</table>
          </dir>
     )
}