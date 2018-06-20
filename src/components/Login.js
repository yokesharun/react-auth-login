import React, { Component } from 'react';
import * as Actions from '../Actions/Actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { 
    Button, 
    Form,
    Container,
    Message
     } from 'semantic-ui-react';

class Login extends Component {

	constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            validation: false,
            validationMessage: ""
        }
    }

    submitForm(){
        if (this.state.email === 'sample@sample.com' && this.state.password === 'sample') {
            this.props.setValidationTrue(this.state);

        } else {
            this.props.setValidationFalse(this.state);
        }
    }

    render() {

        const {validation, validationMessage} = this.props;

        if (validation === true) {
          return <Redirect to='/home' />
        }

        return (
            <Container>
                <div style={{padding:'40px 0'}}>
                    <h3>Sample Email : sample@sample.com</h3>
                    <h3>Sample Password : sample</h3>
                </div>
                { validationMessage && 
                    <Message
                        error
                        header={validationMessage}
                        content=''
                    />
                }
                <Form>
                    <Form.Field>
                        <label>Email</label>
                        <input name="email" type="email" onChange={ e => this.setState({ email : e.target.value}) } />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type="password" name="password" onChange={ e => this.setState({ password : e.target.value}) } />
                    </Form.Field>
                    <Button onClick={() => this.submitForm() } type='submit'>Submit</Button>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    validation: state.validation,
    validationMessage: state.validationMessage
  };
}

const mapDispatchToProps = (dispatch) => ({
    setValidationTrue : data => dispatch(Actions.setValidationTrue(data)),
    setValidationFalse : data => dispatch(Actions.setValidationFalse(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
