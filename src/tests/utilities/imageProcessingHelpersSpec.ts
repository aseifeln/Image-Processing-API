import {resize, isImageExist} from '../../utilities/imageProcessingHelpers';

describe('Testing utility functions', () => {

    describe('Testing isImageExist utility function', () => {
        it('Returns true for an existing image ', () => {
            expect(isImageExist('images/thumb/fjord_400_400')).toBeTrue();
        });
        it('Returns false for a non-existing image', () => {
            expect(isImageExist('images/thumb/palmtunnel_200_200')).toBeFalse();
        })
    })
    
    describe('Testing image resize utility function', () => {
        it('Promise gets resolved given correct input', async () => {
            const result = await resize('santamonica', 250, 300);
            expect(result).toBeResolved();
        });
        it('Promise gets rejected given incorrect filename', async () => {
            const result = await resize('anyimage', 100, 100);
            expect(result).toBeRejected();
        });
    })
})
