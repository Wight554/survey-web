import { compose, withHandlers, setDisplayName } from 'recompose';
import { connect } from 'react-redux';
import Register from './Register';

export const enhance = compose(
  setDisplayName('RegisterContainer'),
  connect(),
  withHandlers({
    handleSubmit: ({ history: { push } }) => () => {
      push('/login');
    }
  })
);

export default enhance(Register);
