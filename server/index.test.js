/* eslint-disable no-console */
/* eslint-disable no-undef */
const axios = require('axios');
const server = require('./index');

const api = axios.create({baseURL: 'http://localhost:3003'});


describe('index.js', () => {

  beforeAll(() => {
    server.start();
  });

  afterAll(() => {
    server.close();
  });

  it('responds to Get requests for valid ids', async () => {
    const { data, status } = await api.get('/api/images/20');
    expect(status).toBe(200);
    expect(data).toEqual([
      'george-stackpole-o29VqE0bOCc-unsplash.jpg',
      'rylan-krupp-hYIp6HwEb2M-unsplash.jpg',
      'zach-vessels-03YiuEOU4OM-unsplash.jpg',
    ]);
  });

  it('responds to Get requests for invalid ids with 404', async () => {
    let status;
    try {
      const temp = await api.get('/api/images/3000');
      status = temp;
    } catch (error) {
      status = error.response.status;
      console.log({ status });
    }
    expect(status).toBe(404);
  });

  xit('responds to Get requests for product names', () => {
    const { data, status } = await api.get('/api/images/red_shirt');
    expect(status).toBe(200);
    expect(data).toEqual([
      'george-stackpole-o29VqE0bOCc-unsplash.jpg',
      'rylan-krupp-hYIp6HwEb2M-unsplash.jpg',
      'zach-vessels-03YiuEOU4OM-unsplash.jpg',
    ]);
  });
  xit('responds to Get requests for invalid product names with 404', async () => {
    let status;
    try {
      const temp = await api.get('/api/images/fuzzy_kitten');
      status = temp;
    } catch (error) {
      status = error.response.status;
      console.log({ status });
    }
    expect(status).toBe(404);
  });
});
