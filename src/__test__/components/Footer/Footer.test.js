import { mount } from 'enzyme';
import React from 'react';
import Footer from '../../../components/Footer';

describe('Pruebas sobre el componente Footer', () => {
  const wrapper = mount(<Footer />);

  test('should be mach to snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be show correctly', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('render del titulo', () => {
    expect(wrapper.find('.Footer-title').text()).toEqual('Platzi Store!!');
  });
});

// describe('footer shapshot', () => {
//   test('comprobar la ui del componente footer', () => {
//     const footer = create(<Footer />);

//     expect(footer.toJSON()).toMatchSnapshot();
//   });
// });
