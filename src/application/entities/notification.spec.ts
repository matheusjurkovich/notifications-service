import { Content } from "./content";
import { Notification } from "./notifications"

describe('Notification content', () => {
    it('should be able to create a notiification ', () => {
        const notification = new Notification({
            content: new Content('Nova solicitação de amizade'),
            category: 'social',
            recipientId: 'Example-recipient-id',
        })

        expect(notification).toBeTruthy()
    });
})