// api/sendmail.js
export default (req, res) => {
    if (req.method === 'POST') {
        const { email, fullname, phone, message } = req.body;

        // Use an email service like SendGrid, Mailgun, or your own SMTP server
        // Example with pseudo-code (you will need to replace this with actual email sending code)
        sendEmail({
            to: 'chicagomustangcarpentry@gmail.com',
            from: email,
            subject: `New contact from ${fullname}`,
            text: `Name: ${fullname}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
        }).then(() => {
            res.status(200).send({ status: 'OK', message: 'Email sent successfully' });
        }).catch(error => {
            console.error('Failed to send email', error);
            res.status(500).send({ status: 'Error', message: 'Failed to send email' });
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
