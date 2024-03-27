"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomInput from "./CustomInput";

interface IFormValues {
  firstName: string;
  email: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          error={errors.firstName}
          label="First Name"
          {...register("firstName", {
            required: {
              message: "required",
              value: true,
            },
            minLength: { message: "min value 5", value: 5 },
          })}
        />

        <CustomInput
          type="email"
          error={errors.email}
          label="email"
          {...register("email", {
            required: {
              message: "required",
              value: true,
            },
            minLength: { message: "min value 5", value: 5 },
          })}
        />

        <input type="submit" className="m-4 border py-2 px-4" />
      </form>
    </div>
  );
};

export default Form;
