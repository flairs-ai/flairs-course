import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import Routes from '../../../config/routes';
import * as auth from '../../../modules/auth';

export const SignupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = async () => {
    const email = "test@example.org";
    const password = "password1234";

    await dispatch(auth.promiseActions.signup({ email, password }));

    history.push(Routes.signup.success);
  };

  return <button onClick={handleClick}>Signup test</button>;
};
