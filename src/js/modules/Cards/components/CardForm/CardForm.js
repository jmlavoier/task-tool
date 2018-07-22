import React from 'react';
import PropTypes from 'prop-types';

import style from './CardForm.sass';

class CardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: this.props.description,
    };

    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onDescriptionKeyDown = this.onDescriptionKeyDown.bind(this);
    this.onDescriptionBlur = this.onDescriptionBlur.bind(this);
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

  onDescriptionChange(event) {
    this.setState({
      description: event.target.value,
    });
  }

  onDescriptionKeyDown(event) {
    // if (event.keyCode === 13) {
    //   this.props.onSaveCard({
    //     id: this.props.id,
    //     description: this.state.description,
    //   });
    // }
  }

  onDescriptionBlur() {
    this.props.onSaveCard({
      id: this.props.id,
      description: this.state.description,
    });
  }

  render() {
    return (
      <textarea
        ref={(el) => { this.el = el; }}
        className={style['card-form']}
        value={this.state.description}
        onChange={this.onDescriptionChange}
        onKeyDown={this.onDescriptionKeyDown}
        onBlur={this.onDescriptionBlur}
      />
    );
  }
}

CardForm.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onSaveCard: PropTypes.func.isRequired,
};

export default CardForm;
