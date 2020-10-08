import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { FormattedMessage, useIntl } from "react-intl";

import Routes from "../../../config/routes";
import * as auth from "../../../modules/auth";
import { CenterPanelLayout } from "../../../shared/components/layout";
import { Input } from "../../../shared/components/form";
import { SubmitButton, EmailInput } from "./signupForm.styles";

export const SignupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const intl = useIntl();

  const { handleSubmit, control } = useForm();

  const onSubmit = async ({ email, password }) => {
    await dispatch(auth.promiseActions.signup({ email, password }));
    history.push(Routes.signup.success);
  };

  return (
    <CenterPanelLayout
      title={
        <FormattedMessage
          description="Signup / title"
          defaultMessage="Create a new account"
        />
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          as={
            <EmailInput
              placeholder={intl.formatMessage({
                description: "Signup / email input placeholder ",
                defaultMessage: "Your e-mail",
              })}
            />
          }
        />

        <Controller
          control={control}
          name="password"
          defaultValue=""
          as={
            <Input.Password
              placeholder={intl.formatMessage({
                description: "Signup / password input placeholder",
                defaultMessage: "Your password",
              })}
            />
          }
        />

        <SubmitButton type="submit">
          <FormattedMessage
            description="Signup / submit button"
            defaultMessage="Submit"
          />
        </SubmitButton>
      </form>
    </CenterPanelLayout>
  );
};
