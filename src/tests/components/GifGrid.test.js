import React from 'react';
import { shallow } from 'enzyme';

import '@testing-library/jest-dom';

import { GifGrid } from '../../components/GifGrid';

describe('Pruebas de GifGrid', () => {
    const category = 'Overwatch';
    const wrapper = shallow(<GifGrid category={category} />)

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imagenes', () => {

    });
});
