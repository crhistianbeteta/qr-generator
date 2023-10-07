import { Request, Response } from "express";
import { ForGeneratingQR } from "../../ports/drivers/for-generating-qr.port";

export class WebAdapter {

    private readonly forGeneratingQR: ForGeneratingQR;

    constructor(forGeneratingQR: ForGeneratingQR) {
        this.forGeneratingQR = forGeneratingQR;
    }

    async generate(req: Request, res: Response): Promise<void> {

        if (!req.body || !req.body.url) {
            res.status(400);
        }
        const { url } = req.body;

        try {
            const generatedQr = await this.forGeneratingQR.generateQR(url);
            res.render('index', { result: generatedQr })
        } catch (err) {
            res.status(500);
        }

    }

}