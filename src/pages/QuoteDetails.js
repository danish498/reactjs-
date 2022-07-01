import { Fragment } from 'react';
import { Route, useParams } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Dan', text: 'Learning react is fun!' },
  { id: 'q2', author: 'Danish', text: 'Learning react is greate😍' },
];

const QuoteDetails = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.productID);

  if (!quote) {
    return <p>no quote found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.productID}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetails;
