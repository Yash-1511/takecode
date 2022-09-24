const Mailgun = require('mailgun-js');

const template = require('./template');

class MailgunService {
  init() {
    try {
      return new Mailgun({
        apiKey: '2decad22e639a19382a7b59cf5982f29-78651cec-03f20d7b',
        domain: 'sandbox4598bff326274a5fbb5a72a1f1554430.mailgun.org'
      });
    } catch (error) {
      console.warn('Missing mailgun from keys');
    }
  }
}

const mailgun = new MailgunService().init();
exports.sendEmail = async (email, type, host, data) => {
  try {
    const message = prepareTemplate(type, host, data);

    const config = {
      from: `TakeCode ! <yash.nvisioniq@gmail.com>`,
      to: email,
      subject: message.subject,
      text: message.text
    };

    return await mailgun.messages().send(config);
  } catch (error) {
    console.log('missing my keys');
  }
};

const prepareTemplate = (type, host, data) => {
  let message;

  switch (type) {
    case 'reset':
      message = template.resetEmail(host, data);
      break;

    case 'reset-confirmation':
      message = template.confirmResetPasswordEmail();
      break;

    case 'signup':
      message = template.signupEmail(data);
      break;

    case 'question-posted':
      message = template.questionPosted();
      break;

    case 'question-approved':
      message = template.questionApproved();
      break;
    default:
      message = '';
  }

  return message;
};
