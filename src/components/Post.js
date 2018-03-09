import React from 'react'
import PropTypes from 'prop-types';

class Post extends React.Component {
  static propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vimeoId: PropTypes.string.isRequired,
    onOpen: PropTypes.func.isRequired
  }

  handleOpen = () => {
    const { onOpen, vimeoId } = this.props;
    onOpen(vimeoId);
  }

  render () {
    const { poster, title, vimeoId } = this.props;
    return (
      <p>
        <a onClick={this.handleOpen}>
          <img
            style={{ borderRadius: '5px' }}
            src={poster}
            alt={title}
          />
          {title}
        </a>
      </p>
    )
  }
}

export default Post
