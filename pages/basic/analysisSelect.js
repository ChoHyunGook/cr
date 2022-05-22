import React from "react";
import styles from "@/styles/pro.module.css"


export default function analysisSelect(){
     return (
          <>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWFOPQ%2FbtrCQwtuxA6%2FOHLJWJgW43Mgkqa3ImCDpk%2Fimg.jpg"
            width="900"
            height="700"/>
          <label
          htmlFor="input-file"
          className={styles.select}
          >
          <h5 className={styles.button}>악보를 등록하세요.</h5>
          <input
          type="file"
          multiple="mutiple"
          id="input-file"
          style={{display: 'none'}}
          onchange="readURL(this);"
          accept=".jpg,jpeg,png"/>
          </label>
          </>
          
     )
}