import { redirect } from 'next/navigation';

const redirectHome = () => {
  redirect('/');
};

export default redirectHome;
