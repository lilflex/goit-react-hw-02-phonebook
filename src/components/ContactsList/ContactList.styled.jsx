import styled from '@emotion/styled';

export const ListOfContacts = styled.ol`
  font-size: 20px;
  font-weight: 500;
  padding-left: 20px;
`;

export const ListItem = styled.li`
  padding: 5px;
`;

export const PhoneNumber = styled.span`
  padding: 0 12px;
`;

export const DeleteBtn = styled.button`
  padding: 3px 6px;

  border: 1px solid;
  border-radius: 3px;
  background-color: rgb(235, 246, 246);

  :active {
    background-color:rgb(50, 98, 210);
  }
`;
