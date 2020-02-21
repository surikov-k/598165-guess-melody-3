import React from 'react';
import renderer from 'react-test-renderer';

import GenreQuestion from './genre-question.jsx';

const question = {
  id: 0,
  type: `genre`,
  genre: ``,
  choices: [
    {
      src: ``,
      genre: ``
    },
    {
      src: ``,
      genre: ``
    },
    {
      src: ``,
      genre: ``
    },
    {
      src: ``,
      genre: ``
    },
  ],
};

test(`<GenreQuestion/> renders correctly`, () => {
  const component = renderer.create(<GenreQuestion
    question={question}
    onAnswer={() => {}}
  />)
  .toJSON();
  expect(component).toMatchSnapshot();
});
