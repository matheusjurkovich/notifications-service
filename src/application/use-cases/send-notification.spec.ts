import { SendNotification } from "./send-notification";

describe('Send notification', () => {
    it('should be able to send a notiification', async () => {
        const sendNotification = new SendNotification()

        const { notification } = await sendNotification.execute({
            content: 'this is a notification',
            category: 'social',
            recipientId: 'matheuzinho-do-ts'
        })

        expect(notification).toBeTruthy()
    });
})
