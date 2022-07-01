import { Fragment } from 'react';
import QuoteList from '../components/quotes/QuoteList';

const AllQuotes = () => {
  const DUMMY_QUOTES = [
    { id: 'q1', author: 'Dan', text: 'Learning react is fun!' },
    { id: 'q2', author: 'Danish', text: 'Learning react is greate😍' },
  ];
  return (
    <Fragment>
      <QuoteList quotes={DUMMY_QUOTES} />
    </Fragment>
  );
};

export default AllQuotes;
