import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
});

export async function POST(request) {
  try {
    // Check if environment variables are set
    if (
      !process.env.NEXT_PUBLIC_SMTP_HOST ||
      !process.env.NEXT_PUBLIC_SMTP_USER ||
      !process.env.NEXT_PUBLIC_SMTP_PASSWORD
    ) {
      console.error("Missing SMTP environment variables");
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    const {
      ownerName,
      email,
      phone,
      petName,
      petType,
      petAge,
      service,
      notes,
    } = await request.json();

    // Validate required fields
    if (
      !ownerName ||
      !email ||
      !phone ||
      !petName ||
      !petType ||
      !service
    ) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation)
    const cleanPhone = phone.replace(/[\s\-()]/g, "");
    const phoneRegex = /^[+]?[0-9]{7,15}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: "Please enter a valid phone number" },
        { status: 400 }
      );
    }

    // Format pet type for display
    const displayPetType = petType.charAt(0).toUpperCase() + petType.slice(1);

    // Email template for Paws Friend
    const emailTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Appointment Booking - Paws Friend</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #F05434, #FF8E8E);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
          }
          .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .field {
            margin-bottom: 20px;
          }
          .field-label {
            font-weight: bold;
            color: #F05434;
            margin-bottom: 5px;
          }
          .field-value {
            background: white;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #F05434;
          }
          .appointment-details {
            background: #fff5f5;
            padding: 20px;
            border-radius: 8px;
            border: 2px solid #F05434;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🐾 Paws Friend</h1>
          <p>New Appointment Booking</p>
        </div>
        
        <div class="content">
          <div class="appointment-details">
            <h3 style="color: #F05434; margin-top: 0;">📅 Appointment Details</h3>
            <p><strong>Service:</strong> ${service}</p>
          </div>
 
          <div class="field">
            <div class="field-label">👤 Owner Name:</div>
            <div class="field-value">${ownerName}</div>
          </div>
          
          <div class="field">
            <div class="field-label">📧 Email:</div>
            <div class="field-value">${email}</div>
          </div>
          
          <div class="field">
            <div class="field-label">📱 Phone:</div>
            <div class="field-value">${phone}</div>
          </div>
          
          <div class="field">
            <div class="field-label">🐕 Pet Name:</div>
            <div class="field-value">${petName}</div>
          </div>
          
          <div class="field">
            <div class="field-label">🐾 Pet Type:</div>
            <div class="field-value">${displayPetType}</div>
          </div>
        
          
          ${petAge
        ? `
          <div class="field">
            <div class="field-label">🎂 Pet Age:</div>
            <div class="field-value">${petAge}</div>
          </div>
          `
        : ""
      }
          
          ${notes
        ? `
          <div class="field">
            <div class="field-label">📝 Additional Notes:</div>
            <div class="field-value">${notes.replace(/\n/g, "<br>")}</div>
          </div>
          `
        : ""
      }
          
          <div class="footer">
            <p>This appointment was booked through the Paws Friend website.</p>
            <p>Submitted on: ${new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}</p>
          </div>
        </div>
      </body>
      </html>
    `;
 
    // Send email to admin
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_FROM_EMAIL,
      to: "powsfriend@gmail.com",
      subject: `New ${displayPetType} Appointment: ${petName} (${service})`,
      html: emailTemplate,
      replyTo: email,
    };
 
    try {
      await transporter.sendMail(mailOptions);
      console.log("Admin email sent successfully");
    } catch (adminEmailError) {
      console.error("Failed to send admin email:", adminEmailError);
    }

    // Send confirmation email to customer
    const confirmationTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Appointment Confirmation - Paws Friend</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #F05434, #FF8E8E);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
          }
          .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .appointment-card {
            background: #fff5f5;
            padding: 25px;
            border-radius: 8px;
            border: 2px solid #F05434;
            margin: 20px 0;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🐾 Paws Friend</h1>
          <p>Appointment Confirmation</p>
        </div>
        
        <div class="content">
          <p>Dear ${ownerName},</p>
          <p>Thank you for booking an appointment with Paws Friend! We're excited to take care of ${petName}.</p>
          
          <div class="appointment-card">
            <h3 style="color: #F05434; margin-top: 0;">Your Appointment Details</h3>
            <p><strong>Pet:</strong> ${petName}</p>
            <p><strong>Service:</strong> ${service}</p>
          </div>
          
          <p>We will contact you shortly to confirm your appointment. If you need to make any changes, please contact us as soon as possible.</p>
          
          <p>Thank you for choosing Paws Friend for your pet's care!</p>
          
          <p>Best regards,<br>The Paws Friend Team 🐾</p>
        </div>
      </body>
      </html>
    `;

    const confirmationOptions = {
      from: process.env.NEXT_PUBLIC_FROM_EMAIL,
      to: email,
      subject: `Appointment Confirmed - ${petName} at Paws Friend`,
      html: confirmationTemplate,
    };

    try {
      await transporter.sendMail(confirmationOptions);
      console.log("Confirmation email sent to customer:", email);
    } catch (confirmEmailError) {
      console.error("Failed to send confirmation email to customer:", confirmEmailError);
      // Don't fail the request if confirmation email fails
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your appointment has been booked successfully! We've sent a confirmation email to you.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Appointment booking error:", error);
    return NextResponse.json(
      {
        error: "Failed to book appointment. Please try again later.",
      },
      { status: 500 }
    );
  }
}
