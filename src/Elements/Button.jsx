import styled from "styled-components";

export const BtnBase = styled.button.attrs({
  className: "rounded-lg text-base transition-all px-6 py-[.4rem] border-2",
})``;


export const BtnBlack = styled(BtnBase).attrs({
  className: "bg-black text-white border-black hover:bg-woodsmoke-950 ",
})``;

export const BtnBlue = styled(BtnBase).attrs({
  className: "text-blue-600 border-blue-600",
})``;
export const BtnBlueFill = styled(BtnBase).attrs({
  className: "text-white bg-blue-600 border-blue-600",
})``;


