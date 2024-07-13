import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

console.log('here')

export default defineConfig({
    assetsInclude: ['**/*.onnx'],
    optimizeDeps: {
        exclude: ['@syntect/wasm'],
    },
    plugins: [wasm(), topLevelAwait()],
    worker: {
        // Not needed with vite-plugin-top-level-await >= 1.3.0
        // format: "es",
        plugins: () => [wasm(), topLevelAwait()],
    },
})
