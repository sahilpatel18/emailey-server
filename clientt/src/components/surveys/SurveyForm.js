import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validEmails from "../../utils/validateEmails";

const FIELDS = [
  { label: "Survey Title", name: "title", required: true },
  { label: "Subject Line", name: "subject", required: true },
  { label: "Email Body", name: "body", required: true },
  { label: "Recipient List", name: "emails", required: true },
];

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        {FIELDS.map((field) => (
          <Field
            key={field.name}
            type='text'
            {...field}
            component={SurveyField}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <Link
            to='/surveys'
            className='red btn-flat white-text'
            style={{ marginTop: "20px" }}
          >
            Cancel
          </Link>
          <button
            type='submit'
            className='teal btn-flat right white-text'
            style={{ marginTop: "20px" }}
          >
            Next
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  errors.emails = validEmails(values.emails || "");

  FIELDS.forEach(({ name, label, required }) => {
    if (required && !values[name]) {
      errors[name] = `You must provide ${label}`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
})(SurveyForm);
