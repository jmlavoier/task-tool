import React from 'react';
import PropTypes from 'prop-types';

import style from './CardForm.sass';

class CardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: this.props.description,
    }
  }

  onDescriptionChange(event) {
    this.setState({
      description: event.target.value,
    })
  }

  onDescriptionKeyDown(event) {
    if (event.keyCode === 13) {
      this.props.onSaveCard({
        id: this.props.id,
        description: this.state.description,
      });
    }
  }

  onDescriptionBlur() {
    this.props.onSaveCard({
      id: this.props.id,
      description: this.state.description,
    });
  }

  componentDidMount() {
    if (this.el) {
      this.el.focus();
    }
  }

  componentDidUpdate() {
    if (this.el) {
      this.el.focus();
    }
  }

  render() {
    return (
      <textarea 
        ref={el => this.el = el}
        className={style['card-form']}
        value={this.state.description} 
        onChange={this.onDescriptionChange.bind(this)} 
        onKeyDown={this.onDescriptionKeyDown.bind(this)}
        onBlur={this.onDescriptionBlur.bind(this)}
      />
    );
  }
}

export default CardForm;