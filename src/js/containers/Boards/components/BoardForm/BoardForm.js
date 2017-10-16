import React from 'react';
import PropTypes from 'prop-types';

import style from './BoardForm.sass';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    }
  }

  onChangeName(event) {
    this.setState({
      name: event.target.value,
    })
  }

  onFieldNameBlur(event) {
    const { value } = event.target;
    this.props.onFieldNameBlur({ 
      id: this.props.id,
      name: value,
    });
  }

  componentDidMount() {
    if (this.inputName) {
      this.inputName.focus();
    }
  }

  componentDidUpdate() {
    if (this.inputName) {
      this.inputName.focus();
    }
  }

  onClickName() {
    this.props.onClickName(this.props.id);
  }

  render() {
    const { name } = this.state;
    const { editMode, onFieldNameBlur } = this.props;

    return (
      <div className={style['board-form']} >
        {editMode ? <input type="text" 
                      ref={el => {this.inputName = el}} 
                      value={name} onChange={this.onChangeName.bind(this)} 
                      onBlur={this.onFieldNameBlur.bind(this)} /> 
                  : <h4 onClick={this.onClickName.bind(this)}>{name}</h4>}
      </div>
    );
  }
}

BoardForm.propTypes = {
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
