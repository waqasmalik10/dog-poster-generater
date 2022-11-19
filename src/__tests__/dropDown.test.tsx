import { render, fireEvent, cleanup, within, getByTestId } from '@testing-library/react';
import DropDown from '../components/common/dropDown';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup) // cleans the rendered creen after every test

test('render DropDown', () => {
    const spyOnSelectChange = jest.fn();

    const breeds = ["hound", "akita"]
    const { getByRole } = render(
        <DropDown
            label='Breed'
            handleChange={(evt: any) => spyOnSelectChange(evt.target.value)}
            value={''}
            options={breeds}
        />
    );


    fireEvent.mouseDown(getByRole('button'));

    const listbox = within(getByRole('listbox'));
    expect(listbox).not.toEqual(null);

    const options =listbox.getAllByRole('option');
    const optionValues = options.map((li) => li.getAttribute('data-value'));

    expect(optionValues).toEqual(breeds);
    // console.log(options)
    // fireEvent.click(options[0]);

    // expect(spyOnSelectChange).toHaveBeenCalledWith('hound');
})