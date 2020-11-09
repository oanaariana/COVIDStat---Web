import React, { Component } from 'react';
import { Container, withStyles, Zoom } from '@material-ui/core';
import { login } from 'containers/App/actions';
import AuthComponent from 'components/Landings/Auth';
import styles from './styles';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    const { classes } = this.props;
    return (
      <Container classes={{ root: classes.root }} maxWidth="xl">
        <Zoom in ref={this.wrapper}>
          <div className={classes.landingPaper}>
            <AuthComponent onChange={this.onChange} onLogin={this.onLogin} />
          </div>
        </Zoom>
      </Container>
    );
  }
}

export default withStyles(theme => styles(theme))(Auth);
