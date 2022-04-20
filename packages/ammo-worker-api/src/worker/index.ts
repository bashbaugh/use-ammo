
export type AmmoOps = {
  test: {}
}
export type AmmoOpName = keyof AmmoOps

export type AmmoMessageTypes = {
  [k in AmmoOpName]: AmmoOps[k] & {
    op: k
  }
}

export type AmmoMessage = AmmoMessageTypes[AmmoOpName]

export interface AmmoWebWorker extends Worker {
  // onmessage: ((e: IncomingWorkerMessage) => void) | null
  postMessage(message: AmmoMessage, transfer: Transferable[]): void
  postMessage(message: AmmoMessage, options?: StructuredSerializeOptions): void
  terminate: () => void
}

self.onmessage = ({ data }: { data: AmmoMessage }) => {
  switch (data.op) {
    case 'test':
      console.log('Geese')
      break
  }
}