import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { OPEN_MAIN_MODAL } from "../../store/Modal";
import IconArrowLeft from "../icon/IconArrowLeft";
import IconMoreVertical from "../icon/IconMoreVertical";
import IconSun from "../../assets/icon/icon-sun.png";
import IconMoon from "../../assets/icon/icon-moon.png";

function BasicNav() {
  const dispatch = useDispatch();

  function handleModalClick() {
    dispatch(OPEN_MAIN_MODAL({ modalType: "USER_INFO" }));
  }

  return (
    <Container>
      <Back to="/feed">
        <BackBtnIcon />
      </Back>
      <ThemeChange>
        <ThemeInput type="checkbox" />
        <OnOffBtn type="button"></OnOffBtn>
      </ThemeChange>
      <More type="button">
        <MoreIcon onClick={handleModalClick} />
      </More>
    </Container>
  );
}

export default BasicNav;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 48px;
  padding: 0 12px 0 16px;
  border-bottom: 0.5px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.bgColor};
  z-index: 10;
`;

const Back = styled(Link)`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const ThemeChange = styled.label`
  position: relative;
  top: 10px;
  left: 40%;
  display: block;
  width: 45px;
  height: 30px;
`;

const ThemeInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #406882;
    box-shadow: inset 1px 5px 1px #406882;
  }
  &:checked + span:before {
    background-image: url(${IconMoon});
    background-color: #1a374d;
    box-shadow: none;
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }
`;

const OnOffBtn = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 12px;
  background-color: #d1d1d1;
  box-shadow: 1px 1px 3px #eaeaea, -1px -1px 3px #eaeaea;
  border-radius: 20px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    top: -5px;
    background-image: url(${IconSun});
    background-size: 18px;
    background-position: center;
    background-color: #fff;
    background-repeat: no-repeat;
    -webkit-transition: 0.5s;
    transition: 0.4s;
    border-radius: 20px;
    box-shadow: 1px 1px 3px #eaeaea;
  }
`;

const More = styled.button`
  width: 22px;
  height: 22px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const BackBtnIcon = styled(IconArrowLeft)`
  width: 22px;
  height: 22px;
`;

const MoreIcon = styled(IconMoreVertical)`
  width: 24px;
  height: 24px;
`;
