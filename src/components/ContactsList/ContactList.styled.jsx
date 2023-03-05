import styled from '@emotion/styled';

export const ListOfContacts = styled.ul`
  width: 350px;
  font-size: 16px;
  font-weight: 500;
  padding-left: 15px;
  word-wrap: break-word;
`;

export const ListItem = styled.li`
  padding: 5px;
`;

export const PhoneNumber = styled.span`
  padding: 0 15px;
`;

export const DeleteBtn = styled.button`
  padding: 3px 6px;

  border: 1px solid;
  border-radius: 3px;
  background-color: rgb(235, 246, 246);
  :hover{
    cursor: grab;
  };
  :active {
    color: rgb(255, 255, 255);
    background-color: rgb(50, 98, 210);
    cursor: grabbing;
  }
`;
