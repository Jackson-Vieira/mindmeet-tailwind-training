const MEDIA_STREAM_CONSTRAINTS: MediaStreamConstraints = {
  audio: true,
  video: true,
};

export function getUserMedia(
  constraints = MEDIA_STREAM_CONSTRAINTS,
): Promise<MediaStream> {
  return new Promise((resolve, reject) => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        resolve(stream);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
