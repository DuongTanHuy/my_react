import React from "react";
import styled, { css } from "styled-components";

// Dung styled components
// const StyledCard = styled.tag(div, h1, strong, span, a, p...)`CSS-in-JS`
// su dung props trong styled-components (scp) -> no kiem tra co ten props trong Styled-components

// C2: Us diem
//  - Co the bi xung dot (co the ket hop 2 cach de tranh xung dot)
//  - Cac the trong styled-components co the dung chung props cua styled-components
const StyledCard = styled.div`
  position: relative;
  // Co the viet theo cach sass
  /* .Card {
    &-Content {

    }

    &-Image {
        
    }
  }
  */

  .CardImage {
    height: 450px;
    width: 100%;
    border-radius: 8px;

    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }

  .CardContent {
    width: calc(100% - 36px);
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    background-color: #fff;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
  }

  .CardTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .CardUser {
    display: flex;
    align-items: center;
    column-gap: 12px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 100rem;
      object-fit: cover;
    }
    span {
      font-weight: 300;
      font-size: 16px;
      color: #333;
    }
  }

  .CardMeta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  .CardFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 18px;
      font-weight: bold;
      color: ${props => props.theme.colors.myBlue || "black"};
    }
    span {
      font-size: ${(props) =>
        props.fontSize ||
        "18px"}; // Nam trong styled-components thi co th goi props cua styled-components do
      font-weight: bold;

      ${(props) =>
        (props.secondary &&
          css`
            background: linear-gradient(86.88deg, #20e3b2, #2cccff);
          `) ||
        css`
          background: linear-gradient(
            86.88deg,
            #7d6aff 1.38%,
            #ffb86c 64.35%,
            #fc2872 119.91%
          );
        `};
      /* ${(props) =>
        !props.secondary &&
        css`
          background: linear-gradient(
            86.88deg,
            #7d6aff 1.38%,
            #ffb86c 64.35%,
            #fc2872 119.91%
          );
        `}; */
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }
  }
`;

const Card2 = (props) => {
  return (
    <StyledCard secondary={props.secondary} fontSize={props.fontSize}>
      <div className="CardImage">
        <img
          src="https://cdn.dribbble.com/userupload/3588883/file/still-e46c6955f015719f9ef09a2ee7663117.png?compress=1&resize=640x480&vertical=top"
          alt=""
        />
      </div>

      <div className="CardContent">
        <div className="CardTop">
          <div className="CardUser">
            <img
              src="https://cdn.dribbble.com/users/759083/screenshots/17173888/media/9e59c04e8b0cf61b7c783628641a8faa.jpg?compress=1&resize=640x480&vertical=top"
              alt=""
            />
            <span>@zndrson</span>
          </div>
          <div className="CardMeta">
            <img src="/head.svg" alt="" />
            <span>256</span>
          </div>
        </div>

        <div className="CardFooter">
          <h3>Cosmic Perspective</h3>
          <span>
            {" "}
            {/* secondary khong phai la props.secondary*/}
            12,000 PSL
          </span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;
