import React from "react";
import { Field, reduxForm } from "redux-form";
import { DatePicker } from "antd";
import moment from "moment";
import { wrapDatePicker } from "../wrapper";

const ADatePicker = wrapDatePicker(DatePicker);

const Form = () => {
  return (
    <Field
      name="DatePicker1"
      component={ADatePicker}
      defaultValue={moment(new Date(), "DD-MM-YYYY")}
      style={{ width: "100%" }}
    />
  );
};

export default reduxForm({ form: "test-form" })(Form);
