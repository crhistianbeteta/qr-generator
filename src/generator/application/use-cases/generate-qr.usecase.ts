import { QrGenerator } from "../../ports/drivens/qr-generator";
import { ForGeneratingQR } from "../../ports/drivers/for-generating-qr.port";

export class GenerateQRUseCase implements ForGeneratingQR {

    private readonly generator: QrGenerator;

    constructor(generator: QrGenerator) {
        this.generator = generator;

    }

    generateQR(url: string): Promise<string> {
        return this.generator.generateQr(url);
    }

}