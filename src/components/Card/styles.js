import styled from "styled-components";

export const CardContainer = styled.div`
  width:240px;
  height:470px;
  border:1px solid black;
  img{
    width:100%;
    height:100%;
  }
  .div-img{
    height:300px;
  }
 .div-name{
  display:flex;
  flex-direction:column;
  width:100%;
  height:100px;
 }
 .div-title{
  display:flex;
  justify-content:center;
  
  background:black;
  color:white;
 }
 h3{

  margin:0;
  padding:5px;
 }
ul{
  padding:0;
  margin-left:10px;
  list-style-type:none;
 
}
li{
  display:flex;
  gap:3px;
  padding-bottom:4px;

}


`;
