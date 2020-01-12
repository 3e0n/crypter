import { crypto, TKeyPair } from '@waves/ts-lib-crypto';
import { GetReturnType } from '@/utils/infer-types';

type TWavesCrypto = GetReturnType<typeof crypto>;

/**
 * Provids crypto functions
 *
 * @see https://github.com/wavesplatform/ts-lib-crypto
 */
export class CryptoProvider {
    private _wc: TWavesCrypto;

    constructor(seed: string) {
        this._wc = crypto({
            seed: seed,
        });
    }

    keyPair(): TKeyPair<string | Uint8Array> {
        return this._wc.keyPair();
    }
}
