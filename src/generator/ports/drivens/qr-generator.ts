export interface QrGenerator {
    generateQr(url: string): Promise<string>
}
