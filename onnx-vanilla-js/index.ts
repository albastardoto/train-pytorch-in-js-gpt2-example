import ort from 'onnxruntime-web'

console.log('Hello via Bun!')
console.log(ort.InferenceSession.create('model.onnx'))
