import React from "react";
import Counter from '../../../components/counter/counter';

describe('<Counter/>', () => {
  it('is alive with correct markup at app start', () => {
    let app = shallow(<Counter/>);
    expect(app.find('.counter').exists()).toBeTruthy();
    expect(app.find('.down').exists()).toBeTruthy();
    expect(app.find('.up').exists()).toBeTruthy();
    expect(app.find('.count').exists()).toBeTruthy();
  });

  it('increase and decreases count when buttons are clicked', () => {
    let app = mount(<Counter/>);
    let buttonUp = app.find('.up');
    let buttonDown = app.find('.down');
    buttonUp.simulate('click');
    expect(app.state('count')).toBe(1);
    buttonDown.simulate('click');
    expect(app.state('count')).toBe(0);
  });

  it('changes polarity when count is positive or negative', () => {
    let app = mount(<Counter/>);
    let buttonUp = app.find('.up');
    let buttonDown = app.find('.down');
    buttonUp.simulate('click');
    expect(app.state('polarity')).toBe('positive');
    buttonDown.simulate('click');
    buttonDown.simulate('click');
    expect(app.state('polarity')).toBe('negative');
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Counter/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
});