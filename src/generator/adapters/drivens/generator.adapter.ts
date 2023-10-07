import { QrGenerator } from "../../ports/drivens/qr-generator";
import { toDataURL } from "qrcode";
export class GeneratorAdapter implements QrGenerator {

    async generateQr(url: string): Promise<string> {

        try {
            const generatedQr = await toDataURL(url);
            return Promise.resolve(generatedQr);
        } catch (err) {
            throw new Error("Error al generar")
        }

    }

}