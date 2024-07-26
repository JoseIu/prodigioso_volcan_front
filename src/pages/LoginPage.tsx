import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { fetchApi } from '../api/fetchApi';
import { useAuth } from '../hook/useAuth';
export const LoginPage = () => {
  const { onLogin } = useAuth();
  const navigate = useNavigate();

  const onHandleSuccess = async (credentialResponse: CredentialResponse) => {
    const { credential } = credentialResponse;
    const dataUser = await fetchApi(credential!);

    if (dataUser.error) {
      console.log(dataUser.message);
      return;
    }
    const { user } = dataUser;
    onLogin(user);
    navigate('/user-profile');
  };

  const onHandleError = () => {};
  return (
    <div>
      <GoogleLogin onSuccess={onHandleSuccess} onError={onHandleError} />
    </div>
  );
};
