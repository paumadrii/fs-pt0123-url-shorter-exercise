import { Redirect } from 'wouter';
import { useUser } from '../../hooks';

const Guard = ({ component: Component }) => {
  const { data, isLoading } = useUser();
  if (isLoading) return <p>Loading...</p>;

  return data ? <Component /> : <Redirect to="/signin" />;
};
export default Guard;
