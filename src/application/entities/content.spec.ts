import { Content } from "./content"

describe('Notification content', () => {
    it('should be able to create a notiification content', () => {
        const content = new Content('Você ecebeu uma solicitação de amizade')

        expect(content).toBeTruthy()
    });

    it('should not be able to create a notiification content with less than 5 characters', () => {
        expect(() => new Content('aaa')).toThrow()
    });

    it('should not be able to create a notiification content with moe than 240 characters', () => {
        expect(() => new Content('a'.repeat(241))).toThrow()
    });
})

