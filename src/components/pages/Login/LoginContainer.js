import { compose, withHandlers, setDisplayName } from 'recompose';
import { connect } from 'react-redux';
import Login from './Login';

export const enhance = compose(
  setDisplayName('LoginContainer'),
  connect(),
  withHandlers({
    handleSubmit: ({ history: { push } }) => () => {
      push('/');
    }
  })
);

export default enhance(Login);
