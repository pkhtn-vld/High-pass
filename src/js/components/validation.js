import { validateForms } from '../functions/validate-forms';
const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Недопустимый формат'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Недопустимый формат'
      }
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Недопустимый формат'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Недопустимый формат'
      },
    ]
  },
  {
    ruleSelector: '.input-text',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Недопустимый формат'
      },
      {
        rule: 'maxLength',
        value: 700,
        errorMessage: 'Недопустимый формат'
      },
    ]
  },
];

const rules2 = [
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Недопустимый формат'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Недопустимый формат'
      },
    ]
  }
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.contacts__form', rules1, afterForm);
validateForms('.about__form', rules2, afterForm);
