import { put } from 'redux-saga/effects'
import { fetchData } from './App'
import mockData from './mock.json'

const fetchMock = response => {
  global.fetch = jest.fn().mockImplementation(
    () =>
      new Promise(resolve => {
        resolve({ json: () => response })
      })
  )
}

test('fetch data returns some data', async () => {
  expect.assertions(4)

  fetchMock(mockData)

  const gen = fetchData()
  const nextState = gen.next()

  expect(nextState.done).toBe(false)
  await expect(nextState.value.CALL.fn()).resolves.toMatchObject(mockData)

  expect(gen.next().value).toMatchObject(put({ type: 'DATA_LOADED' }))
  expect(gen.next().done).toBe(true)
})
