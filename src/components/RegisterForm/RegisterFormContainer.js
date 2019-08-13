import { compose, withStateHandlers, setDisplayName } from 'recompose';
import RegisterForm from './RegisterForm';

export const enhance = compose(
  setDisplayName('RegisterFormContainer'),
  withStateHandlers(
    ({ initialPage = 1 }) => ({
      page: initialPage
    }),
    {
      nextPage: ({ page }) => () => ({
        page: page + 1
      })
    }
  )
);

export default enhance(RegisterForm);
