import React from 'react';
import { shallow } from 'enzyme';

import '@testing-library/jest-dom';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas de GifGrid', () => {
    const category = 'Overwatch';
    
    test('Debe mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imágenes', () => {
        const gifts = [{
            id: 'qaswdefrgthyjuk',
            url: 'https://localhost/imagen.jpg',
            title: 'culaquier cosa'
        },
        {
            id: '1223435436567567',
            url: 'https://localhost/imagen2.jpg',
            title: 'culaquier cosa 2'
        }]

        useFetchGifs.mockReturnValue({
            data: gifts,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('progress').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifts.length);
    });
});
