import { getGifts } from '../../helpers/getGifts'

describe('Pruebas con getGifts fetch', () => {
    test('Debe de traer 3 elementos', async() => {
        const gifts = await getGifts('Digimon');
        expect(gifts.length).toBe(3);
    });
    
    test('Debe de traer 0 elementos', async() => {
        const gifts = await getGifts('');
        expect(gifts.length).toBe(0);
    });
})
