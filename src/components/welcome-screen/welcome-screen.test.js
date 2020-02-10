import React from 'react';
import renderer from 'react-test-renderer';

import WelcomScreen from './welcome-screen.jsx';

describe(`<WelcomeScreen/> `, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<WelcomScreen
        errorsCount={0}
      />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
