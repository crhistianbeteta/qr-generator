"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratorConfiguration = void 0;
var generator_adapter_1 = require("../adapters/drivens/generator.adapter");
var web_adapter_1 = require("../adapters/drivers/web.adapter");
var generate_qr_usecase_1 = require("../application/use-cases/generate-qr.usecase");
var GeneratorConfiguration = /** @class */ (function () {
    function GeneratorConfiguration() {
        this._qrGenerator = new generator_adapter_1.GeneratorAdapter();
        this._forGeneratingQR = new generate_qr_usecase_1.GenerateQRUseCase(this.qrGenerator);
        this._webAdapter = new web_adapter_1.WebAdapter(this._forGeneratingQR);
    }
    Object.defineProperty(GeneratorConfiguration.prototype, "qrGenerator", {
        get: function () {
            return this._qrGenerator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeneratorConfiguration.prototype, "forGeneratingQR", {
        get: function () {
            return this._forGeneratingQR;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeneratorConfiguration.prototype, "webAdapter", {
        get: function () {
            return this._webAdapter;
        },
        enumerable: false,
        configurable: true
    });
    return GeneratorConfiguration;
}());
exports.GeneratorConfiguration = GeneratorConfiguration;
//# sourceMappingURL=generator-configuration.js.map