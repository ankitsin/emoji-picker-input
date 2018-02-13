import React from 'react'
import emojiConverter from './helpers/emojiHelper'
import EmojiPicker from './EmojiPicker'

class EmojiTextBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showEmoji: false,
      cursorPosition: this.props.commonMsg.length,
      emoji: {}
    }
  }
  toggleEmojiBlock () {
    this.setState({
      showEmoji: !this.state.showEmoji
    })
  }
  handleEmojiClick (emoji, event) {
    this.toggleEmojiBlock()
    this.props.updateCommonMsg(this.insert(this.state.commonMsg, this.state.cursorPosition, emoji.native))
  }
  insert (str, index, value) {
    return str.substr(0, index) + value + str.substr(index)
  }
  handleChange (e) {
    const commonMsg = emojiConverter(e.target.value)
    this.props.updateCommonMsg(commonMsg)
  }
  capture (e) {
    const newPosition = e.target.selectionStart
    this.setState({
      cursorPosition: newPosition
    })
  }
  render () {
    return (
      <div className="commonMsg">
        <textarea
          name="commonMessage"
          placeholder="Introduce the options you're sending and your recommendation(s)."
          className="form-control"
          value={this.props.commonMsg}
          onChange={event => this.handleChange(event)}
          onBlurCapture={e => this.capture(e)}
        />
        <div className="emojiLauncher" onClick={() => this.toggleEmojiBlock()}>
          {this.state.showEmoji ? (<EmojiPicker onEmojiClick={this.handleEmojiClick.bind(this)} />) : ''}
        </div>
      </div>
    )
  }
}

export default EmojiTextBox
