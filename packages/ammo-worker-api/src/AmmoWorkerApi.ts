import EventEmitter from 'events'

interface AmmoWorkerAPIConfig {}

export default class AmmoWorkerApi extends EventEmitter {
  private config: AmmoWorkerAPIConfig

  constructor(config: AmmoWorkerAPIConfig) {
    super()

    this.config = config
  }
}
