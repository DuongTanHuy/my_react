import React from "react";
import styled, { css } from "styled-components";

// Dung styled components
// const StyledCard = styled.tag(div, h1, strong, span, a, p...)`CSS-in-JS`
// su dung props trong styled-components (scp) -> no kiem tra co ten props trong Styled-components

// C1: Uu diem
//  - Khong bi xung dot
//  - Cac props trong tung styles-components la phan biet nhau, khong dung chung duoc
const StyledCard = styled.div`
  position: relative;
`;

const CardImage = styled.div`
  height: 450px;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  width: calc(100% - 36px);
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  background-color: #fff;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
`;

const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.secondary && "blue") || "black"};
`;

const CardAmount = styled.span`
  font-size: ${(props) => props.fontSize || "18px"};
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
`;

const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/userupload/3588883/file/still-e46c6955f015719f9ef09a2ee7663117.png?compress=1&resize=640x480&vertical=top"
          alt=""
        />
      </CardImage>

      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://cdn.dribbble.com/users/759083/screenshots/17173888/media/9e59c04e8b0cf61b7c783628641a8faa.jpg?compress=1&resize=640x480&vertical=top"
              alt=""
            />
            <UserName>@zndrson</UserName>
          </CardUser>
          <CardMeta>
            <img src="/head.svg" alt="" />
            <span>256</span>
          </CardMeta>
        </CardTop>

        <CardFooter>
          <CardTitle secondary>Cosmic Perspective</CardTitle>
          <CardAmount secondary={props.secondary} fontSize="22px">
            {" "}
            {/* secondary khong phai la props.secondary*/}
            12,000 PSL
          </CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
