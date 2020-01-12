export interface KeyPair {
    public: string;
    private: string;
}

export async function genKeyPair(): Promise<KeyPair> {
    const pair: KeyPair = {
        private: '',
        public: '',
    };
    return Promise.resolve(pair);
}
