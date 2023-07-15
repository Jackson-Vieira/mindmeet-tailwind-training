interface SoundMeterProcessorData {
  volume: number
  instant: number
  slow: number
}

class SoundMeter {
  private context!: AudioContext;

  private worklet!: AudioWorkletNode;

  public instant: number;

  public slow: number;

  public clip: number;

  public handleAudioProcess:
    // eslint-disable-next-line no-unused-vars
    | ((data: SoundMeterProcessorData) => void)
    | undefined;

  constructor() {
    this.instant = 0.0;
    this.slow = 0.0;
    this.clip = 0.0;
  }

  public async connectToSource(
    stream: MediaStream,
    // eslint-disable-next-line no-unused-vars
    callback?: (error: Error | null) => void,
  ): Promise<void> {
    console.log('SoundMeter connecting');
    try {
      this.context = new AudioContext();
      const source = this.context.createMediaStreamSource(stream);
      await this.context.audioWorklet.addModule(
        '/src/modules/sound-meter/sound-meter-processor.js',
      );
      this.worklet = new AudioWorkletNode(this.context, 'sound-meter-processor');
      this.worklet.port.onmessage = (event) => {
        const data = event.data as SoundMeterProcessorData;
        this.instant = data.instant;
        this.slow = data.slow;
        if (typeof this.handleAudioProcess !== 'undefined') {
          this.handleAudioProcess(data);
        }
      };
      this.worklet.connect(this.context.destination);
      source.connect(this.worklet);

      if (typeof callback !== 'undefined') {
        callback(null);
      }
    } catch (e) {
      console.error(e);
      if (typeof callback !== 'undefined') {
        callback(e as Error);
      }
    }
  }

  public stop(): void {
    console.log('SoundMeter stopping');
    this.worklet.disconnect();
  }
}

export default SoundMeter;
