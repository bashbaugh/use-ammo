import EventEmitter from 'events'
import { initializeAmmo } from './ammo-binding'
import Worker from 'web-worker:./worker'
import type { AmmoMessage, AmmoWebWorker } from './worker'

interface AmmoWorkerAPIConfig {}

export default class AmmoWorkerApi extends EventEmitter {
  private config: AmmoWorkerAPIConfig
  private ammo: typeof Ammo | null = null
  private worker: AmmoWebWorker | null = null

  private messageQueue: AmmoMessage[] = []

  constructor(config: AmmoWorkerAPIConfig) {
    super()

    this.config = config
  }

  private postMessage(message: any) {
    if (this.worker) return this.worker.postMessage(message)
    this.messageQueue.push(message)
  }

  async init () {
    this.ammo = await initializeAmmo()
  }
}
