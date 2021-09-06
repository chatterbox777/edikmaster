import { useSelector } from 'react-redux';
import { RootState } from '../../store/Users/userReducer';

export default function User() {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h2>
        {user?.id || 'User'} {user.name} {user.last_name}
      </h2>
    </div>
  );
}
