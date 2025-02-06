from fastapi import FastAPI, HTTPException, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, constr
from typing import Annotated
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

app = FastAPI()

# CORS (Cross-Origin Resource Sharing) setup - Allow requests from your React app
origins = [
    "http://localhost:3000",  # Your React development server
    # Add your production URL here when you deploy
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data validation model for the contact form
class ContactForm(BaseModel):
    name: Annotated[str, constr(min_length=1)]
    email: EmailStr
    subject: Annotated[str, constr(min_length=1)]
    message: Annotated[str, constr(min_length=1)]


@app.post("/api/contact")
async def contact(name: Annotated[str, Form()], email: Annotated[str, Form()], subject: Annotated[str, Form()], message: Annotated[str, Form()]):
    # Normally you would send an email here, but for this example, we'll just return a success message.
    # In a real application, you'd use a library like smtplib or a service like SendGrid.
    try:
        form_data = ContactForm(name=name, email=email, subject=subject, message=message)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

    # Email sending logic
    try:
        message = MIMEMultipart()
        message["From"] = os.environ.get("EMAIL_HOST_USER")
        message["To"] = os.environ.get("EMAIL_RECIPIENT")
        message["Subject"] = f"New contact form submission: {form_data.subject}"

        body = f"""
        Name: {form_data.name}
        Email: {form_data.email}
        Subject: {form_data.subject}
        Message:
        {form_data.message}
        """
        message.attach(MIMEText(body, "plain"))

        with smtplib.SMTP(os.environ.get("EMAIL_HOST"), int(os.environ.get("EMAIL_PORT"))) as server:
            if os.environ.get("EMAIL_USE_TLS") == "True":
                server.starttls()
            server.login(os.environ.get("EMAIL_HOST_USER"), os.environ.get("EMAIL_HOST_PASSWORD"))
            text = message.as_string()
            server.sendmail(os.environ.get("EMAIL_HOST_USER"), os.environ.get("EMAIL_RECIPIENT"), text)

        print(f"Successfully sent email for contact form submission: {form_data}")
        return {"message": "Message sent successfully!"}

    except Exception as e:
        print(f"Error sending email: {e}")
        raise HTTPException(status_code=500, detail="Failed to send email.")