import {} from 'jest-fetch-mock';
import getData from '../../utils/getData';

describe('fetch api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('llamar a una api y retornar datos ', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://google.com').then(resp => {
      expect(resp.data).toEqual('12345');
    });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
