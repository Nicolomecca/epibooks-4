import AllTheBooks from "../components/AllTheBooks";
import { render, screen } from '@testing-library/react';
import fantasy from '../data/fantasy.json';


describe('check number cards', ()=> {
it('lenght cards', () =>{
render(<AllTheBooks/>)
const cardElements =screen.queryAllByTestId('card-element')
expect(cardElements.length).toBe(fantasy.lengthn

);

})
})