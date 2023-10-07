import { GeneratorAdapter } from "../adapters/drivens/generator.adapter";
import { WebAdapter } from "../adapters/drivers/web.adapter";
import { GenerateQRUseCase } from "../application/use-cases/generate-qr.usecase";
import { QrGenerator } from "../ports/drivens/qr-generator";
import { ForGeneratingQR } from "../ports/drivers/for-generating-qr.port";

export class GeneratorConfiguration {

    private readonly _qrGenerator: QrGenerator;
    private readonly _forGeneratingQR: ForGeneratingQR;
    private readonly _webAdapter: WebAdapter;

    constructor() {
        this._qrGenerator = new GeneratorAdapter();
        this._forGeneratingQR = new GenerateQRUseCase(this.qrGenerator);
        this._webAdapter = new WebAdapter(this._forGeneratingQR)

    }

    get qrGenerator(): QrGenerator {
        return this._qrGenerator;
    }


    get forGeneratingQR(): ForGeneratingQR {
        return this._forGeneratingQR;
    }


    get webAdapter(): WebAdapter {
        return this._webAdapter;
    }
}
