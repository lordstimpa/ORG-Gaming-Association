import styled from "styled-components";

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 200px;
  background: #000;

  & .Rights {
    width: 300px;
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <Body>
      <div className="Rights">
        <p>©2023 Original Pros Spelförening.</p>
        <p>All Rights Reserved.</p>
      </div>
    </Body>
  );
};

export default Footer;
