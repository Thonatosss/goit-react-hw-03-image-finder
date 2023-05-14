import styled from '@emotion/styled';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #18122b;
  margin-bottom: 50px;
`;
const SubmitBtn = styled.button`
  padding: 16px 24px;
  height: 66px;
  margin-right: 20px;
  background-color: #635985;
  border: 2px solid #443c68;
  color: #fff;
  border-radius: 10px;
  border-style: none;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const Input = styled.input`
  height: 60px;
  width: 320px;
  border: 2px solid #443c68;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 30px;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 25px;
`;
const Form = styled.form`
display: flex;
  justify-content: center;
  align-items: center;
`
export { Header, SubmitBtn, Input, Form };

