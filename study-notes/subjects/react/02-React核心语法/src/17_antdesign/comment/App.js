import React, { PureComponent } from 'react'
import CommentInput from './componenets/CommentInput'
import CommentItem from './componenets/CommentItem'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      commentList: []
    }
  }

  render() {
    return (
      <div style={{ width: '500px', padding: '20px' }}>
        {
          this.state.commentList.map((item, index) => {
            return <CommentItem
              key={item.id}
              comment={item}
              removeItem={e => this.removeComment(index)}
            />
          })
        }
        <CommentInput submitComment={this.submitComment.bind(this)} />
      </div>
    )
  }

  submitComment(info) {
    this.setState({
      commentList: [...this.state.commentList, info]
    })
  }

  removeComment(index) {
    const newCommentList = [...this.state.commentList]
    newCommentList.splice(index, 1)
    this.setState({
      commentList: newCommentList
    })
  }
}
