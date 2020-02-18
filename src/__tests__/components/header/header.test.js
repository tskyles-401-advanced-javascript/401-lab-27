import React from 'react';
import Header from '../../../components/header/header';

describe("<Header />", () => {
  it('is alive at app start', () => {
    let app = shallow(<Header/>);
    expect(app.find('header').exists()).toBeTruthy();
    expect(app.find('h1').exists()).toBeTruthy();
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Header/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});