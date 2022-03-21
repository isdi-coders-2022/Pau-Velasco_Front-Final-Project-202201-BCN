import styled from "styled-components";
import GenericButton from "../components/GenericButton/GenericButton";

const LoginContainer = styled.section`
  background: linear-gradient(193.32deg, #14213d 45.83%, #000000 100%);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  & label {
    color: #fff;
  }

  & div {
    display: flex;
    flex-direction: column;
  }
`;

const Login = () => {
  return (
    <>
      <LoginContainer>
        <form>
          <div>
            <label htmlFor="username">USERNAME</label>
            <input id="username" type="text" />
          </div>
          <div>
            <label htmlFor="password">PASSWORD</label>
            <input id="password" type="text" />
          </div>
          <GenericButton text="LOGIN" disabled={true} />
        </form>
      </LoginContainer>
    </>
  );
};

export default Login;
