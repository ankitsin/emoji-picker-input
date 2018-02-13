import { emojiIndex } from 'emoji-mart'

const emojiConverter = (input) => {
  const { emojis } = emojiIndex
  const newInput = input.split(':')
  let toReturn = newInput
  if (newInput.length % 2 === 1) {
    toReturn = newInput.map((data, index) => (emojis[data] ? emojis[data].native : index % 2 === 1 ? `:${data}:` : data))
    return toReturn.join('')
  }
  return input
}
export default emojiConverter
