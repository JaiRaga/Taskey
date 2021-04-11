const sgMail = require('@sendgrid/mail')
const sendGridAPIKey = require('../config/keys').sendGridAPI

sgMail.setApiKey(sendGridAPIKey)

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'raga.j.santhosh@gmail.com',
		subject: 'Thanks for joining in!',
		text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
	})
}

const sendCancelationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'raga.j.santhosh@gmail.com',
		subject: 'Sorry to see you go!',
		text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
	})
}

module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail,
}
