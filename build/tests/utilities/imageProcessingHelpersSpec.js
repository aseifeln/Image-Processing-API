"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imageProcessingHelpers_1 = require("../../utilities/imageProcessingHelpers");
describe('Testing utility functions', function () {
    describe('Testing isImageExist utility function', function () {
        it('Returns true for an existing image ', function () {
            expect((0, imageProcessingHelpers_1.isImageExist)('images/thumb/fjord_400_400.jpg')).toBeTrue();
        });
        it('Returns false for a non-existing image', function () {
            expect((0, imageProcessingHelpers_1.isImageExist)('images/thumb/palmtunnel_200_200.jpg')).toBeFalse();
        });
    });
    describe('Testing image resize utility function', function () {
        it('Promise gets resolved given correct input', function () {
            var result = (0, imageProcessingHelpers_1.resize)('santamonica', 250, 300);
            return expectAsync(result).toBeResolved();
        });
        it('Promise gets rejected given incorrect filename', function () {
            var result = (0, imageProcessingHelpers_1.resize)('anyimage', 100, 100);
            return expectAsync(result).toBeRejected();
        });
    });
});
