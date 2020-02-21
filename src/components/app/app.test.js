import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

const questions = [
  {
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
  },
  {
    id: 1,
    type: `artist`,
    song: {
      artist: ``,
      src: ``
    },
    choices: [
      {
        picture: ``,
        artist: ``
      },
      {
        picture: ``,
        artist: ``
      },
      {
        picture: ``,
        artist: ``
      },
    ],
  },
];

test(`<App/> renders correctly`, () => {
  const component = renderer.create(<App
    questions={questions}
    errorsCount={0}
  />)
  .toJSON();
  expect(component).toMatchSnapshot();
});
