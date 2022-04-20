import typescript from '@rollup/plugin-typescript'
import webWorkerLoader from 'rollup-plugin-web-worker-loader'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [typescript(), webWorkerLoader()]
}
