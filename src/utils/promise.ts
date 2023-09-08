export function wait(time: number) {
  console.log('waiting..');
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
