import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";

import * as auth from "../../../modules/auth";
import Routes from "../../../config/routes";

export const useSignupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });
  const { handleSubmit, errors, setError, control, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await dispatch(auth.promiseActions.signup({ email, password }));
      history.push(Routes.signup.success);
    } catch (error) {
      setError("server", { type: "manual", message: error.msg });
    }
  };

  return {
    control,
    errors,
    formState,
    handleSubmit: handleSubmit(onSubmit),
  };
};
