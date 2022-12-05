import styled from "styled-components";
import gobleIcon from "../assets/icons8-globe-50.png";

export default function Header() {
  return (
    <Title>
      <h1>{`{ Front-end Engineer }`} Dahye Yun</h1>
      <LanguageBtn role="button">
        <ButtonLogo src={gobleIcon} alt="globe icon" />
        한국어
      </LanguageBtn>
    </Title>
  );
}

const Title = styled.header`
  margin: 1rem 0;
`;

const LanguageBtn = styled.button`
  position: absolute;
  right: 3rem;
  top: 1.5rem;
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;

  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;
`;

const ButtonLogo = styled.img`
  width: 30px;
  margin-right: 1rem;
`;
