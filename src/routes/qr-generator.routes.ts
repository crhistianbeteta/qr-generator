import express, { Request, Response } from "express"
import { GeneratorConfiguration } from "../generator/ configuration/generator-configuration";

const router = express.Router();
const config = new GeneratorConfiguration();
const webAdapter = config.webAdapter;

router.get('/', (req: Request, res: Response) => {
    res.render('index');
})
router.post('/', (req: Request, res: Response) => webAdapter.generate(req, res));

export default router;