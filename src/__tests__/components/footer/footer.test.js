import React from 'react';
import Footer from '../../../components/footer/footer';

describe("<Footer />", () => {
  it('is alive at app start', () => {
    let app = shallow(<Footer/>);
    expect(app.find('footer').exists()).toBeTruthy();
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Footer/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});