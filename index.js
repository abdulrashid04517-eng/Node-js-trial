import express from "express"
import sendEmail from "saifstack-email"
import rashidEmailTemplate from "./emailTemplate.js"

const app = express()

app.get("/", (req, res) => {
  res.send("Hello Bete !")
})

app.listen(3000, async () => {
  console.log("Server running at 3000!")

  try {
    await sendEmail({
		api: "ac9fd2938e20ff2d",
		domainName: "Sirri",
		email: "abdulrashid04517@gmail.com",
		subject: "To send the email just trial !",
		layout: rashidEmailTemplate("Saif")
	})

    console.log("Email sent successfully!")
  } catch (error) {
    console.error("Failed to send email:", error)
  }
})
