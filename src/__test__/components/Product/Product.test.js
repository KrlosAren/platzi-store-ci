import { mount } from 'enzyme';
import React from 'react';
import Product from '../../../components/Product';
import ProviderMock from '../../../__mocks__/providerMocks';

describe('Name of the group', () => {
  const handleAddToCart = jest.fn();
  const wrapper = mount(
    <ProviderMock>
      <Product product={ProviderMock} handleAddToCart={handleAddToCart} />
    </ProviderMock>
  );
  test('should be match to snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('comprobar el boton de pagar', () => {
    wrapper.find('button').simulate('click');

    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
