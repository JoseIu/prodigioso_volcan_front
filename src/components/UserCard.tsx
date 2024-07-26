import { UserInterface } from '../interface/user.interface';
import './userCard.scss';

interface UserCardProps {
  user: UserInterface;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <article className="card">
      <img className="card__img" src={user.picture} alt={user.name} />

      <div className="card__content">
        <h2 className="card__name">Name:{user.name}</h2>
        <p className="card__email">Email:{user.email}</p>
        <p className="card__info">Provider Service: {user.iss}</p>
        <p className="card__info">Verified:{user.email_verified ? 'YES' : 'NO'}</p>
      </div>
    </article>
  );
};
