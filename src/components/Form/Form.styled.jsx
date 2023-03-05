import styled from '@emotion/styled';

export const FormWrap = styled.form`
  max-width: 300px;
  padding: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Text = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 5px 0;
  font-size: 20px;
  font-weight: 500;
`;

export const SubmitBtn = styled.button`
  font-size: 15px;
  font-weight: 500px;

  padding: 5px 10px;
  margin-bottom: 10px;

  background-color: rgb(235, 246, 246);

  border: 1px solid;
  border-radius: 5px;

  transition: 250ms background-color;
  :hover{
    cursor: grab;
  };
  :active {
    color: rgb(255, 255, 255);
    background-color: rgb(50, 98, 210);
    cursor: grabbing;
  }
`;
