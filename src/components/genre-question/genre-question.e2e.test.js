import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapeter from 'enzyme-adapter-react-16';

import GenreQuestion from './genre-question.jsx';

configure({adapter: new Adapeter()});

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

test(`Form sending is prevented`, () => {
  const onAnswer = jest.fn();
  const genreQuestion = shallow(<GenreQuestion
    question={question}
    onAnswer={onAnswer}
  />);
  const form = genreQuestion.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });
  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});

test(`Consistent answer passes to the callback`, () => {
  const onAnswer = jest.fn((...args) => [...args]);
  const answers = [false, false, false, false];

  const genreQuestion = shallow(<GenreQuestion
    question={question}
    onAnswer={onAnswer}
  />);

  const secondInput = genreQuestion.find(`input`).at(1);
  const form = genreQuestion.find(`form`);

  secondInput.simulate(`click`);
  form.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(answers);

  expect(genreQuestion.find(`input`).map((it) => it.prop(`checked`))
  ).toEqual(answers);

});
