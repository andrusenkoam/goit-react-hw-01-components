import PropTypes from 'prop-types';
import {
  UserItem,
  UserStatus,
  UserAvatar,
  UserName,
} from './FriendListItem.styled';

export const FriendListItem = ({ status, avatar, name }) => {
  return (
    <UserItem>
      <UserStatus status={status}>{status}</UserStatus>
      <UserAvatar src={avatar} alt="User avatar" width="80" />
      <UserName>{name}</UserName>
    </UserItem>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
