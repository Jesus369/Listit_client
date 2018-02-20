import React, { Component } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Header,
  InputGroup,
  Icon
} from "native-base";

import { Field, reduxForm, SubmissionError } from "redux-form";

const renderField = ({
  input: { onChange, ...restInput },
  placeholder,
  secureTextEntry,
  meta: { touched, error }
}) =>
  <InputGroup error={touched && error ? true : false}>
    <Input
      placeholder={placeholder}
      autoCapitalize="none"
      onChangeText={onChange}
      {...restInput}
      secureTextEntry={secureTextEntry}
    />
    {touched && error && <Icon name="close-circle" style={{ color: "red" }} />}
  </InputGroup>;

const onSubmit = ({ username = "", email = "", password = "" }) => {
  let errors = {};
  let isError = false;
  if (username.trim() === "") {
    errors.username = "Required";
    isError = true;
  }
  if (email.trim() === "") {
    errors.email = "Required";
    isError = true;
  }
  if (password.trim() === "") {
    errors.password = "Required";
    isError = true;
  }

  if (isError) {
    throw new SubmissionError(errors);
  } else {
    //submit form
  }
};

const signup = ({ handleSubmit }) =>
  <Container>
    <Header />
    <Content>
      <Form>
        <Item>
          <Field
            name="username"
            placeholder="Username"
            component={renderField}
          />
        </Item>
        <Item>
          <Field
            name="email"
            placeholder="Email Address"
            component={renderField}
          />
        </Item>
        <Item last>
          <Field
            name="password"
            placeholder="Password"
            component={renderField}
            secureTextEntry
          />
        </Item>
        <Button
          style={{ marginTop: 50, marginRight: 10, marginLeft: 10 }}
          onPress={handleSubmit(onSubmit)}
          block
        >
          <Text>Signup</Text>
        </Button>
      </Form>
    </Content>
  </Container>;

export default reduxForm({
  form: "signup"
})(signup);
