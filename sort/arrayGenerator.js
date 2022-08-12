export default (length, max) =>
  Array(length)
    .fill()
    .map(() => Math.round(Math.random() * max));
