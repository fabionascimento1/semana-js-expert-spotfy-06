import { createServer } from 'http'

import { handler } from './router.js'

export default createServer(handler)