import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { AddCategory } from '../../components/AddCategory';

describe('Pruebas del componente AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('Debe mostrar el componente correctamente ', () => {    
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const value = 'Overwatch';
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: value } });
    });

    test('No debe de postear la información con submit ', () => {
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'Overwatch' } });

        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('');
    })
    
    
});
