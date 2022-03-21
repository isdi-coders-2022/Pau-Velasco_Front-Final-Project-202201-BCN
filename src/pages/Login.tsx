import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GenericButton from "../components/GenericButton/GenericButton";
import { userBlankFields } from "../utils/blankFields";
import { loginUser } from "../utils/loginUserFetch";

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
  const navigate = useNavigate();
  const [formData, setFormData] = useState(userBlankFields);

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const isInvalid = formData.username === "" || formData.password === "";

  const submitForm = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = formData;

    setFormData(userBlankFields);
    const returnedToken = await loginUser(data);
    console.log(returnedToken);

    if (!returnedToken.error) {
      navigate("/");
    }
  };

  return (
    <>
      <LoginContainer>
        <form noValidate autoComplete="off" onSubmit={submitForm}>
          <div>
            <label htmlFor="username">USERNAME</label>
            <input
              id="username"
              type="text"
              onChange={changeData}
              value={formData.username}
            />
          </div>
          <div>
            <label htmlFor="password">PASSWORD</label>
            <input
              id="password"
              type="text"
              onChange={changeData}
              value={formData.password}
            />
          </div>
          <GenericButton text="LOGIN" disabled={isInvalid} />
        </form>
      </LoginContainer>
    </>
  );
};

export default Login;
