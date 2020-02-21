import React from 'react';
import renderer from 'react-test-renderer';

import ArtistQuestion from './artist-question.jsx';

const question = {
  id: 0,
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
};

test(`<ArtistQuestion/> screen renders correctly`, () => {
  const component = renderer.create(
      <ArtistQuestion
        question={question}
        onAnswer={() => {}}
      />
  ).toJSON();
  expect(component).toMatchSnapshot();
});
