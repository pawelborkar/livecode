import Avatar from 'react-avatar';
import { IClient } from '../../../interfaces';

const Client = ({ username }: IClient) => {
  return (
    <div className="flex flex-col m-3">
      <Avatar name={username} size="50" round="12px" />
      <span className="mt-2">{username}</span>
    </div>
  );
};

export default Client;
