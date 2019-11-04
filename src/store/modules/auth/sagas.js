import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';
import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  const response = yield call(api.post, 'session', {
    email,
    password,
  });

  const { access_token } = response.data.token;
  const { user } = response.data;

  yield put(signInSuccess(access_token, user));
  history.push('/dash');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
