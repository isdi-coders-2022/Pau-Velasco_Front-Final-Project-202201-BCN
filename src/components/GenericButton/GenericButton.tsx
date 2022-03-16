import styled from "styled-components";

const Button = styled.button`
  background-color: #fca311;
  color: #000;
  border: none;
  width: 120px;
  height: 40px;
  font-size: 18px;
  font-weight: 900;
  border-radius: 5px;

  :disabled {
    opacity: 0.5;
    :hover {
      background-color: #fca311;
      border: none;
    }
  }

  :hover {
    border: 2px solid white;
  }
`;

interface GenericButtonProps {
  text: string;
  disabled: boolean;
}

const GenericButton = ({ text, disabled }: GenericButtonProps): JSX.Element => {
  return (
    <>
      <Button type="submit" disabled={disabled}>
        {text}
      </Button>
    </>
  );
};

export default GenericButton;
