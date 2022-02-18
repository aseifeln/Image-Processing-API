import {resize, isImageExist} from '../../utilities/imageProcessingHelpers';

describe('Testing utility functions', () => {

    describe('Testing isImageExist utility function', () => {
        it('Returns true for an existing image ', () => {
            expect(isImageExist('images/thumb/fjord_400_400.jpg')).toBeTrue();
        });
        it('Returns false for a non-existing image', () => {
            expect(isImageExist('images/thumb/palmtunnel_200_200.jpg')).toBeFalse();
        })
    })
    
    describe('Testing image resize utility function', () => {
        it('Promise gets resolved given correct input', () => {
            const result = resize('santamonica', 250, 300)
            return expectAsync(result).toBeResolved();
        });
        it('Promise gets rejected given incorrect filename', () => {
            const result = resize('anyimage', 100, 100)
            return expectAsync(result).toBeRejected();
        });
    })
})
