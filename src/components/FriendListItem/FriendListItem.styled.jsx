import styled from '@emotion/styled';

export const UserItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  background-color: #ffffff;
  &:not(:first-of-type) {
    margin-top: 10px;
  }
`;

const userIsOnline = props => (props.status ? 'green' : 'red');

export const UserStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${userIsOnline};
`;
export const UserAvatar = styled.img`
  margin-left: 20px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  padding: 5px;
`;
export const UserName = styled.p`
  margin-left: 20px;
  font-size: 28px;
  font-weight: 600;
`;
