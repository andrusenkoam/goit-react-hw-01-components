import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id}>
          <FriendListItem
            userStatus={isOnline}
            avatar={avatar}
            userName={name}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
