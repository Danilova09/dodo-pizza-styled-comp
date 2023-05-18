import React from "react";
import {
  HeaderWrapper,
  HeaderRightBlock,
  Call,
  Logo,
  Destination,
  HeaderLeftBlock,
  SignIn,
  Coins,
} from "./style";
import { StarFilled, DollarOutlined } from "@ant-design/icons";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderRightBlock>
        <Logo>My Pizza</Logo>
        <Destination>
          <div>Доставка Пиццы</div>
          <span>
            30 мин
            <StarFilled style={{ color: "gold" }} />
          </span>
        </Destination>
        <Call>
          <div>5678956789</div>
          <div>Звонок бесплатный</div>
        </Call>
      </HeaderRightBlock>
      <HeaderLeftBlock>
        <Coins>
          <DollarOutlined style={{ fontSize: "25px" }} />
          <span>Coins</span>
        </Coins>
        <SignIn>Войти</SignIn>
      </HeaderLeftBlock>
    </HeaderWrapper>
  );
}

export default Header;
