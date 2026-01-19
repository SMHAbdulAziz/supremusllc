# Supremus LLC Backend API

Backend service for handling contact form submissions and sending emails.

## Features

- Express.js REST API
- Email sending via Nodemailer
- Rate limiting (5 requests per 15 minutes)
- CORS protection
- Input validation and sanitization
- Railway deployment ready

## Local Development

### Prerequisites

- Node.js 18+ installed
- Gmail account (or other SMTP service)

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file:
   ```bash
   cp .env.example .env
   ```

3. Configure environment variables in `.env`:
   - Set your SMTP credentials (Gmail App Password recommended)
   - Update `EMAIL_TO` if needed
   - Set `FRONTEND_URL` to your frontend URL

4. Start development server:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:3000`

### Gmail Setup

To use Gmail as your SMTP service:

1. Enable 2-Factor Authentication on your Google account
2. Go to [App Passwords](https://myaccount.google.com/apppasswords)
3. Create a new app password for "Mail"
4. Use this password in `SMTP_PASS` environment variable

## API Endpoints

### POST /api/send-email

Send a contact form email.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services."
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message here"
}
```

### GET /health

Health check endpoint for monitoring.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-19T08:00:00.000Z",
  "uptime": 123.456
}
```

## Deployment to Railway

See [RAILWAY_DEPLOYMENT.md](../RAILWAY_DEPLOYMENT.md) for detailed deployment instructions.

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment | `production` |
| `FRONTEND_URL` | Frontend URL for CORS | `https://supremusllc.biz` |
| `SMTP_HOST` | SMTP server | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `587` |
| `SMTP_USER` | SMTP username | `your-email@gmail.com` |
| `SMTP_PASS` | SMTP password | `your-app-password` |
| `EMAIL_TO` | Recipient email | `contactus@supremusllc.biz` |

## Security Features

- Rate limiting: 5 requests per 15 minutes per IP
- CORS restricted to frontend domain
- Input validation and sanitization
- Environment variable protection
- XSS prevention

## License

MIT
