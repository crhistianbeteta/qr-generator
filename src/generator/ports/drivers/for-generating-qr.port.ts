export interface ForGeneratingQR {
    generateQR(url: string): Promise<string>
}