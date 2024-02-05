import React from 'react'
import './index.css'

class AlertButton extends React.Component {
  render() {
    return (
      <button className='style-btn' onClick={() => alert(`A label desse botão é: ${this.props.label}`)}>Clique aqui</button>
    );
  }
}

export default AlertButton