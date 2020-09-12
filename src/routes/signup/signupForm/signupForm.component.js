import React from "react";
import { Controller } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";

import { CenterPanelLayout } from "../../../shared/components/layout";
import { FormError, Input } from "../../../shared/components/form";
import { SubmitButton, EmailInput } from "./signupForm.styles";
import { Spin } from "../../../shared/components/spin";
import { useSignupForm } from "./signupForm.hooks";

export const SignupForm = () => {
  const intl = useIntl();

  const { control, errors, formState, handleSubmit } = useSignupForm();

  return (
    <CenterPanelLayout
      title={
        <FormattedMessage
          description="Signup / title"
          defaultMessage="Create a new account"
        />
      }
    >
      <form onSubmit={handleSubmit}>
        <FormError
          errors={[
            errors.server?.message,
            errors.email?.message,
            errors.password?.message,
          ]}
        />

        <Controller
          control={control}
          name="email"
          defaultValue=""
          as={
            <EmailInput
              placeholder={intl.formatMessage({
                description: "Signup / email input placeholder",
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

        <SubmitButton type="submit" block disabled={!formState.isValid}>
          {formState.isSubmitting ? (
            <Spin style={{ fontSize: 24 }} />
          ) : (
            <FormattedMessage
              description="Signup / submit button"
              defaultMessage="Submit"
            />
          )}
        </SubmitButton>
      </form>
    </CenterPanelLayout>
  );
};
