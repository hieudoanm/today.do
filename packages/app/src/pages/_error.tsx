import { ErrorTemplate } from '@tasks/templates/ErrorTemplate';
import { NextPage } from 'next';

const messages = [
  'Something went wrong on our end.',
  'An unexpected error occurred.',
  'We ran into a server issue.',
  'The server had trouble processing your request.',
  'This wasn’t supposed to happen.',
];

const ErrorPage: NextPage = () => {
  return (
    <ErrorTemplate
      error={{
        code: 500,
        message: 'Internal server error',
      }}
      messages={messages}
    />
  );
};

export default ErrorPage;
