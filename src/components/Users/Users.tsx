import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { setUserActionCreator } from '../../store/actionCreators';

type UsersProps = {
  users: [
    {
      email: string;
      gender: string;
      id: number;
      ip_address: string;
      last_name: string;
      name: string;
    },
  ];
  loading: boolean;
};
export default function Users({ users, loading }: UsersProps) {
  const dispatch = useDispatch();

  function setUser(user) {
    dispatch(setUserActionCreator({ user }));
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        users.map(user => (
          <li key={user.id}>
            <NavLink to={`/user/${user.id}`} onClick={() => setUser(user)}>
              {`${user.id} ${user.last_name} ${user.name}`}
            </NavLink>
          </li>
        ))
      )}
    </>
  );
}
