import PropTypes from 'prop-types';

export const FriendListItem = ({ userStatus, avatar, userName }) => {
  return (
    <>
      <span>{userStatus}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{userName}</p>
    </>
  );
};

FriendListItem.propTypes = {
  userStatus: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
