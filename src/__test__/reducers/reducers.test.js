import reducer from '../../reducers';
import ProductMock from '../../__mocks__/productMock';

describe('reducers tests', () => {
  test('probando reducer return initialState', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('add to card reducer', () => {
    const initialState = {
      cart: [],
    };

    const payload = ProductMock;

    const action = {
      type: 'ADD_TO_CART',
      payload,
    };

    const expected = {
      cart: [ProductMock],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
