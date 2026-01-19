import express from 'express';
import { sendContactEmail } from '../config/email.js';

const router = express.Router();

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * POST /api/send-email
 * Send contact form email
 */
router.post('/send-email', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required (name, email, message)',
            });
        }

        // Validate email format
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid email format',
            });
        }

        // Validate field lengths
        if (name.length > 100) {
            return res.status(400).json({
                success: false,
                error: 'Name must be less than 100 characters',
            });
        }

        if (message.length > 5000) {
            return res.status(400).json({
                success: false,
                error: 'Message must be less than 5000 characters',
            });
        }

        // Sanitize inputs (basic XSS prevention)
        const sanitizedData = {
            name: name.trim().replace(/[<>]/g, ''),
            email: email.trim().toLowerCase(),
            message: message.trim(),
        };

        // Send email
        await sendContactEmail(sanitizedData);

        res.json({
            success: true,
            message: 'Email sent successfully',
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to send email. Please try again later.',
        });
    }
});

export default router;
