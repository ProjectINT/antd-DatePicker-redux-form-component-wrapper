import React from "react";
import { Form } from "antd";
import moment from "moment";

const FormItem = Form.Item;

export const wrapDatePicker = DatePicker => ({
  input,
  meta,
  children,
  hasFeedback,
  label,
  defaultValue,
  ...rest
}) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <FormItem
      label={label}
      validateStatus={hasError ? "error" : "success"}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <DatePicker
        {...input}
        {...rest}
        value={moment(input.value || defaultValue, "YYYY:MM:DD")}
      >
        {children}
      </DatePicker>
    </FormItem>
  );
};
