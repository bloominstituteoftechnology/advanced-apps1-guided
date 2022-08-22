module.exports = (n) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < n; i++) {
    result += chars[Math.floor(Math.random() * 26)]
  }
  return result
}
