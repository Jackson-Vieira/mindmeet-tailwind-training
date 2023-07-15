// sound-meter-processor.js

class VolumeProcessor extends AudioWorkletProcessor {
  constructor() {
    super()

    this.averaging = 0.95

    this.sum = 0.0
    this.clipcount = 0
    this.samplesProcessed = 0

    this.volume = 0.0
    this.instant = 0.0
    this.slow = 0.0
    this.clip = 0.0
  }

  // eslint-disable-next-line no-unused-vars
  process(inputs, outputs, parameters) {
    const input = inputs[0][0]
    const inputLength = input.length

    this.sum = 0
    this.clipcount = 0

    input.forEach((sample) => {
      this.sum += sample * sample
      if (Math.abs(sample) > 0.99) {
        this.clipcount += 1
      }
    })

    // root mean square
    const rms = Math.sqrt(this.sum / inputLength)
    // compute a smoothed version for less flickering of the display
    this.volume = Math.max(rms, this.volume * this.averaging)

    const finalVolume = Math.round(this.volume * 100)

    this.instant = Math.max(rms, this.instant * this.averaging)
    this.slow = 0.95 * this.slow + 0.05 * this.instant
    this.clip = this.clipcount / inputLength

    this.port.postMessage({
      instant: this.instant,
      clip: this.clip,
      volume: finalVolume
    })

    return true
  }
}
registerProcessor('sound-meter-processor', VolumeProcessor)
