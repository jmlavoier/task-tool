import React from 'react';
import PropTypes from 'prop-types';

import style from './BoardForm.sass';

class BoardForm extends React.Component {
  static focusElement(el) {
    el.focus();
  }

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onFieldNameBlur = this.onFieldNameBlur.bind(this);
    this.onFieldNameKeyup = this.onFieldNameKeyup.bind(this);
    this.onClickName = this.onClickName.bind(this);
  }

  componentDidMount() {
    if (this.inputName) {
      this.constructor.focusElement(this.inputName);
    }
  }

  componentDidUpdate() {
    if (this.inputName) {
      this.constructor.focusElement(this.inputName);
    }
  }

  onFieldNameBlur(event) {
    const { value } = event.target;
    this.props.onFieldNameBlur({
      id: this.props.id,
      name: value,
    });
  }

  onChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  onFieldNameKeyup(event) {
    const { keyCode } = event;
    const { value } = event.target;

    if (keyCode === 13) {
      this.props.onFieldNameBlur({
        id: this.props.id,
        name: value,
      });
    }
  }

  onClickName() {
    this.props.onClickName(this.props.id);
  }

  render() {
    const { name } = this.state;
    const { editMode } = this.props;

    return (
      <div className={style['board-form']} >
        {editMode ? <input
          type="text"
          ref={(el) => { this.inputName = el; }}
          value={name}
          onChange={this.onChangeName}
          onBlur={this.onFieldNameBlur}
          onKeyUp={this.onFieldNameKeyup}
        /> : <h4><button type="button" onClick={this.onClickName}>{this.props.name}</button></h4>
        }
      </div>
    );
  }
}

BoardForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  editMode: PropTypes.bool,
  onFieldNameBlur: PropTypes.func,
  onClickName: PropTypes.func,
};

BoardForm.defaultProps = {
  name: '',
  editMode: false,
  onFieldNameBlur: () => {},
  onClickName: () => {},
};

export default BoardForm;
