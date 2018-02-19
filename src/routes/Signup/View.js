import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from "native-base";

const renderField = ({
  /* Listening to the input values */
  input: { onChange, ...restInput },
  name,
  placeholder,
  secureTextEntry,
  meta: { touched: error }
}) =>
  <input
    name={name}
    placeholder={placeholder}
    /* Decapitalize input entries */
    autoCapitalization="none"
    onChangeText={onChange}
    {...restInput}
    secureTextEntry={secureTextEntry}
  />;

const signup = () =>
  <Container>
    <Content>
      <Form>
        <Item>
          <Field
            name="username"
            palceholder="Username"
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
