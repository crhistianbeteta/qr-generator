"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateQRUseCase = void 0;
var GenerateQRUseCase = /** @class */ (function () {
    function GenerateQRUseCase(generator) {
        this.generator = generator;
    }
    GenerateQRUseCase.prototype.generateQR = function (url) {
        return this.generator.generateQr(url);
    };
    return GenerateQRUseCase;
}());
exports.GenerateQRUseCase = GenerateQRUseCase;
//# sourceMappingURL=generate-qr.usecase.js.map