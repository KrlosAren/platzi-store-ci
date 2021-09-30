import { mount } from 'enzyme';
import React from 'react';
import Header from '../../../components/Header';
import ProviderMock from '../../../__mocks__/providerMocks';

describe('Name of the group', () => {
  const wrapper = mount(
    <ProviderMock>
      <Header />
    </ProviderMock>
  );
  test('should be match to snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('render del titulo', () => {
    const title = wrapper.find('.Header-title').text();

    expect(title).toEqual('Platzi Store');
  });
});

// describe('Header snapshot', () => {
//   test('comprobar el shapshot header', () => {
//     const header = create(
//       <ProviderMock>
//         <Header />)
//       </ProviderMock>
//     );

//     expect(header.toJSON()).toMatchSnapshot();
//   });
// });
