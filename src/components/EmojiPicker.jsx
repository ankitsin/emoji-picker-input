import React from 'react'
import { Picker } from 'emoji-mart'

const EmojiPicker = props => (
  <div className="emojiPicker">
    <Picker
      emojiSize={20}
      perLine={8}
      skin={1}
      autoFocus={false}
      set="apple"
      include={['recent', 'people', 'foods', 'symbols', 'activity']}
      color="#ae65c5"
      sheetSize={20}
      onClick={(emoji, event) => props.onEmojiClick(emoji, event)}
      style={{
        width: '270px',
        overflow: 'scroll',
        position: 'absolute',
        background: '#fff',
        bottom: '61px'
      }}
    />
  </div>
)
export default EmojiPicker
