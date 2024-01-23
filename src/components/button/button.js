import React from 'react'
import './button.css'

class Button extends React.Component {
  handleClick = () => {
    const label = this.props.label
    alert(`A label desse botão é: ${label}`)
  }

  render() {
    return (
      <button className='style-btn' onClick={this.handleClick}>Clique aqui</button>
    );
  }
}

export default Button