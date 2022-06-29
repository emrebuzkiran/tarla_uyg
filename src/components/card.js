import React from "react";
import { useState } from "react";
import {
  CRow,
  CCol,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCollapse,
  CCardText,
  CButton,
} from "@coreui/react";

const Cards = (props) => {
  return (
    <div>
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src="https://picsum.photos/200" />

          <CCardBody>
            <CCardTitle>Card title</CCardTitle>

            <CCardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CCardText>
            <CButton href="#">Go somewhere</CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  );
};

export default Cards;
