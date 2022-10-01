import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  margin-bottom: 40px;
  border: 1px solid var(--color-gray);
  border-radius: 5px;
  background-color: #ffffff;
  overflow: hidden;
`;

export const Description = styled.div`
  padding: 40px 0;
  text-align: center;
`;

export const Avatar = styled.img`
  display: inline;
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-top: 30px;
  color: var(--title-color);
  font-size: 40px;
`;

export const UserTag = styled.p`
  margin-top: 10px;
  color: var(--text-color);
`;

export const UserPlace = styled.p`
  margin-top: 10px;
  color: var(--text-color);
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  padding: 50px 10px;
  outline: 1px solid var(--color-gray);
  background-color: var(--item-bg-color);
`;

export const ItemLabel = styled.span`
  margin-bottom: 5px;
  color: var(--color-gray);
`;

export const ItemQuantity = styled.span`
  color: var(--color-black);
  font-size: 20px;
  font-weight: 600;
`;
