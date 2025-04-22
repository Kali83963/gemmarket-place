import { z } from 'zod';
// import { PrismaClient } from '@prisma/client';
import prisma  from "@/config/prisma";
//const prisma = new PrismaClient();

const NotificationSchema = z.object({
    userId: z.string(),
    message: z.string(),
});

type NotificationData = z.infer<typeof NotificationSchema>;

class NotificationService {
    static async notifyBuyerSeller(userId: string, message: string) {
        const validData: NotificationData = NotificationSchema.parse({ userId, message });
        const notification = await prisma.notification.create({
            data: {
                userId: String(validData.userId),
                message: validData.message,
            },
        });
        console.log(userId)
        return notification;
    }

    static async alertCertificateValidation(userId: string, message: string) {
        const validData: NotificationData = NotificationSchema.parse({ userId, message });
        const notification = await prisma.notification.create({
            data: {
                userId: String(validData.userId),
                message: validData.message,
            },
        });
        console.log(userId);
        return notification;
    }

    static async remindPendingPayment(userId: string, message: string) {
        const validData: NotificationData = NotificationSchema.parse({ userId, message });
        console.log(userId);

        const notification = await prisma.notification.create({
            data: {
                userId: String(validData.userId),
                message: validData.message,
            },
        });
        console.log(userId);
        return notification;
    }
}

export default NotificationService;