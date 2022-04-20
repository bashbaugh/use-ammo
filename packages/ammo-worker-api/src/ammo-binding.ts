import "ammo.js/builds/ammo.wasm.js"
// import ammoWasm from "ammo.js/builds/ammo.wasm.wasm";

// TODO find actual CDN URL
export function initializeAmmo(wasmUrl: string = 'https://raw.githubusercontent.com/kripken/ammo.js/main/builds/ammo.wasm.wasm') {
  return Ammo({
    loadFile: () => {
      return wasmUrl
    }
  })
}
