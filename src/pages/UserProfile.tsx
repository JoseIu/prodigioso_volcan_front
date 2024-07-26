import { UserCard } from '../components/UserCard';
import { useAuth } from '../hook/useAuth';

export const UserProfile = () => {
  const { authState } = useAuth();

  console.log(authState.user);
  return (
    <section className="wrapper">
      <h1>User Profile: {authState.user?.name}</h1>
      <UserCard user={authState.user!} />
    </section>
  );
};
