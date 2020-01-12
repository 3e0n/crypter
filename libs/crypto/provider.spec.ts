import { CryptoProvider } from './provider';

describe('CryptoProvider', () => {
    const seed = 'uncle push human bus echo drastic garden joke sand warfare sentence fossil title color combine';
    const crypto = new CryptoProvider(seed);

    it('should ', () => {
        const keys = crypto.keyPair();

        expect(keys).toBeDefined();
    });
});
