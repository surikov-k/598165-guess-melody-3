import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WelcomeScreen from './welcome-screen';

Enzyme.configure({adapter: new Adapter()});

describe(`<WelcomeSceen/>`, () => {
  it(`should fire onClick callback when welcome button is clicked`, () => {
    const onClick = jest.fn();
    const component = shallow(<WelcomeScreen
      errorsCount={0}
      onWelcomeButtonClick={onClick}
    />);
    const welcomeButton = component.find(`.welcome__button`);
    welcomeButton.simulate(`click`);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
