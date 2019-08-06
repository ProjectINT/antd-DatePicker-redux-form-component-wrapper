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
      defaultValue={moment(new Date(), "YYYY:MM:DD")}
      style={{ width: "30%", marginLeft: "30px" }}
    />
  );
};

export default reduxForm({ form: "test-form" })(Form);
