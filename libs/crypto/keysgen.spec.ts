import { genKeyPair } from './keysgen';

describe('crypto/keysgen:genKeyPair', () => {
    it('should generate key pair public and private', async () => {
        const pair = await genKeyPair();
        expect(pair).toBeDefined();
    });
});
