import { Router } from 'express';
import NotificationController from '../controller/notification.controller';

const router = Router();

router.post('/transactionnotify', NotificationController.notifyTransaction);
router.post('/certificatestatusalert', NotificationController.alertCertificateStatus);
router.post('/paymentreminder', NotificationController.reminderPendingPayment);


export { router as notificationRoutes };
