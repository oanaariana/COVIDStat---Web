import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Container, Paper, withStyles, Zoom } from '@material-ui/core';
import { login } from 'containers/App/actions';
import { makeSelectErrors } from 'containers/App/selectors';
import AuthComponent from 'components/Landings/Auth';
import styles from './styles';

class Auth extends Component {
  constructor(props) {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };
    this.wrapper = React.createRef();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogin = () => {
    const payload = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.dispatch(login(payload));
  };

  render() {
    const { classes, errors } = this.props;
    return (
      <Container classes={{ root: classes.root }} maxWidth="xl">
        <Zoom in ref={this.wrapper}>
          <Paper elevation={3} className={classes.landingPaper}>
            <AuthComponent onChange={this.onChange} onLogin={this.onLogin} errors={errors} />
          </Paper>
        </Zoom>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  errors: makeSelectErrors(),
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles()),
)(Auth);