import {render , fireEvent , cleanup, screen } from '@testing-library/react';
import Button from '../components/common/button';
import '@testing-library/jest-dom/extend-expect';
import { useState } from 'react';

afterEach(cleanup) // cleans the rendered creen after every test

test('render Button', ()=>{
    render(
        <Button 
            handleClick={() => {}} 
            disabled={false}
            variant='contained'
            text={'Generate'} 
        />
    ); 
        
    const text = screen.getByText(/Generate/)

    expect(text).toBeInTheDocument()
    expect(text).not.toBeDisabled();
})

test('render disabled Button', ()=>{
    render(
        <Button 
            handleClick={() => {}} 
            disabled={true}
            variant='contained'
            text={'Generate'} 
        />
    ); 
        
    const text = screen.getByText(/Generate/)

    expect(text).toHaveAttribute('disabled');
})

test('render disabled Button', ()=>{
    render(
        <Button 
            handleClick={() => {}} 
            disabled={true}
            variant='contained'
            text={'Generate'} 
        />
    ); 
        
    const text = screen.getByText(/Generate/)

    expect(text).toHaveAttribute('disabled');
})
