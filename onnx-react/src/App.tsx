import { useEffect, useState } from 'react'
import ort from 'onnxruntime-web'
import './App.css'

function App() {
    useEffect(() => {
        ;(async function () {
            console.log('here')
            const session = await ort.InferenceSession.create('/model.onnx')
            console.log(session)

            const input = Float32Array.from([2, 1, 0, 1, 0, 2, 2, 1, 0, 1, 0])
            const tensor = new ort.Tensor('float32', input, [1, 11])
            const feeds = { a: tensor }
            const results = await session.run(feeds)
            console.log(results)
            const data = results.c.data
            console.log(data)
        })()
    })

    return <img src={'/vite.svg'}></img>
}

export default App
