import { jest, expect, describe, test, beforeEach } from '@jest/globals'
import config from '../../../server/config.js'

const { pages } = config

describe('Routes - test site for api response', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
    jest.clearAllMocks
  })
  test.todo('Get / - should redirect to home page')
  test.todo(`Get /home - should response with ${pages.homeHTML} file stream`)
  test.todo(`Get /controller - should response with ${pages.controllerHTML} file stream`)
  test.todo(`Get /file.ext - should response with file stream`)
  test.todo(`Get /unknown - give an inexistent route it should response with 404`)

  describe('exceptions', () => {
    test.todo(`give an inexistent ile it should respond with 404`)
    test.todo(`give an error ile it should respond with 500`)
  })

 })