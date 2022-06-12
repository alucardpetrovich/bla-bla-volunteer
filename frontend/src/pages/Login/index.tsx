import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

// import { IAuthCredentials } from '../../models/authModel/authModel';
import { userLogin } from '../../redux/auth/authOperations';

const Login = () => {
  // FIXME: пофіксить і не робить так більше)
  // eslint-disable-next-line
  const message = useSelector((state: any) => state.auth.error);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const dispatch = useDispatch();

  const handleSubmitForm: SubmitHandler<FieldValues> = data => {
    console.log(data);
    try {
      // FIXME: пофіксить і не робить так більше
      // eslint-disable-next-line
      dispatch(userLogin(data) as any);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>login</h3>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div style={{ height: '20px' }}>{message && <span>{message}</span>}</div>
        <input
          {...register('email', {
            required: 'email is required field',
            maxLength: 30,
            minLength: { value: 4, message: 'minimum 4 symbols' },
          })}
          type="email"
          autoComplete="false"
        />
        <div style={{ height: '20px' }}>{errors?.email && <span>{errors?.email?.message}</span>}</div>
        <input
          {...register('password', {
            required: 'this field is required',
            maxLength: 30,
            minLength: { value: 4, message: 'minimum 4 symbols' },
          })}
          type="password"
          autoComplete="false"
        />
        <div style={{ height: '20px' }}>{errors?.password && <span>{errors?.password?.message}</span>}</div>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Login;
