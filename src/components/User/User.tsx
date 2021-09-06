import { useSelector } from 'react-redux';

export default function User() {
  const { user } = useSelector(state => state.user);

  return (
    <div>
      <h2>
        {user?.id || 'User'} {user.name} {user.last_name}
      </h2>
    </div>
  );
}
