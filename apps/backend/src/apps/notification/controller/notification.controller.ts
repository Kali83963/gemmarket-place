import { Request, Response } from 'express';
import NotificationService from '../services/notification.service';

class NotificationController {
    async notifyTransaction(req: Request, res: Response) {
        const { userId, message } = req.body;
        try {
            const notification = await NotificationService.notifyBuyerSeller(userId, message);
            res.status(201).json(notification);
        } catch (error: unknown) { // Specify that error is of type unknown
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
                console.log(userId)
            } else {
                res.status(500).json({ message: "An unknown error occurred." });
            }
        }
    }

    async alertCertificateStatus(req: Request, res: Response) {
        const { userId, message } = req.body;
        try {
            const notification = await NotificationService.alertCertificateValidation(userId, message);
            res.status(201).json(notification);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "An unknown error occurred." });
            }
        }
    }

    async reminderPendingPayment(req: Request, res: Response) {
        const { userId, message } = req.body;
        try {
            const notification = await NotificationService.remindPendingPayment(userId, message);
            res.status(201).json(notification);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: "An unknown error occurred." });
            }
        }
    }
}

export default new NotificationController();