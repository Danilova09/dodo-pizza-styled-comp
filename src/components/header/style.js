import styled from "styled-components";
import { Button } from "antd";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderRightBlock = styled.div`
  display: flex;
  gap: 20px;
`;

export const Logo = styled.div`
  font-size: 30px;
`;

export const Destination = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Call = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderLeftBlock = styled.div`
  display: flex;
`;

export const Coins = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignIn = styled(Button)`
  color: white;
  background-color: grey;
`;
