"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var generator_configuration_1 = require("../generator/ configuration/generator-configuration");
var router = express_1.default.Router();
var config = new generator_configuration_1.GeneratorConfiguration();
var webAdapter = config.webAdapter;
router.get('/', function (req, res) {
    res.render('index');
});
router.post('/', function (req, res) { return webAdapter.generate(req, res); });
exports.default = router;
//# sourceMappingURL=qr-generator.routes.js.map