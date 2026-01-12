const rashidWelcomeEmail = (name = "Friend") => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Welcome to Rashid</title>
</head>

<body style="
  margin:0;
  padding:0;
  background:linear-gradient(135deg,#0f2027,#203a43,#2c5364);
  font-family: 'Segoe UI', Arial, sans-serif;
">

  <div style="
    max-width:600px;
    margin:40px auto;
    background:#ffffff;
    border-radius:14px;
    padding:40px;
    box-shadow:0 20px 40px rgba(0,0,0,0.25);
  ">

    <!-- Brand -->
    <div style="
      font-size:28px;
      font-weight:700;
      letter-spacing:1px;
      color:#0f172a;
      margin-bottom:30px;
    ">
      Rashid
    </div>

    <!-- Greeting -->
    <div style="
      font-size:18px;
      color:#111827;
      margin-bottom:16px;
    ">
      Hi <strong>${name}</strong>,
    </div>

    <!-- Message -->
    <div style="
      font-size:16px;
      color:#374151;
      line-height:1.7;
      margin-bottom:30px;
    ">
      Welcome to the <strong>Rashid</strong> domain.  
      We’re excited to have you here. This space is built to deliver
      clean experiences, powerful systems, and meaningful connections.
    </div>

    <!-- Accent Line -->
    <div style="
      height:4px;
      width:60px;
      background:linear-gradient(90deg,#6366f1,#22d3ee);
      border-radius:4px;
      margin-bottom:30px;
    "></div>

    <!-- Footer -->
    <div style="
      font-size:14px;
      color:#6b7280;
    ">
      Regards,<br/>
      <span style="color:#0f172a;font-weight:600;">
        Rashid Team
      </span>
    </div>

  </div>

</body>
</html>
`
}

export default rashidWelcomeEmail
