import AllTheBooks from "../components/AllTheBooks";
import { render, screen } from '@testing-library/react';
import fantasy from '../data/fantasy.json';


describe('check number cards', ()=> {
it('lenght cards', () =>{
render(<AllTheBooks/>)
// cerco tutti gli elementi card e verifico che tutti gli elementi siano visualizzato quando la query di ricerca è vuota
const cardElements =screen.queryAllByTestId('card-element')
expect(cardElements.length).toBe(fantasy.length);
})
})