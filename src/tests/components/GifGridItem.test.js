import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas del componente GifGridItem', () => {
    const title = 'crybaby GIF'
    const url = 'https://media3.giphy.com/media/ygAmzS6qTOkzxG0VsB/giphy.gif?cid=ef5ad807tpsqr3euuhgy4cxigprybtps0f2qg0y73q8x3cqq&rid=giphy.gif';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p'); 
        expect(p.text().trim()).toBe(title);
    });
    

    test('Debe de tener la imagen igual a la url', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe tener la clase de animacion animate__pulse', () => {
        const div = wrapper.find('.column');
        const classes = div.prop('className');

        expect(classes).toMatch('animate__pulse')
    })
    
});
