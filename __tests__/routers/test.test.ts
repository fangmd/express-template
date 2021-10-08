/**
 * @description router api test: example
 */
import server from '../_server'

describe('routers/test', () => {
  it('should success', async () => {
    const response = await server.get('/test')
    expect(response.status).toEqual(200)
    expect(JSON.parse(response.text).code).toEqual(200)
  })
})
