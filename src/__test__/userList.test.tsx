import {screen, render} from '@testing-library/react'
import Userlist from '../pages/userList'
import { BrowserRouter } from 'react-router-dom';
jest.mock('react-redux', () => {
    return {
        ...jest.requireActual('react-redux'),
        useSelector: jest.fn().mockImplementation(() => ({})),
        useDispatch: () => jest.fn(),
    };
});
describe("User Fetch List Test Case", ()=>{
    test("link tag", ()=>{
        render(<BrowserRouter><Userlist /></BrowserRouter>);
        const linkEl = screen.getByRole('link', { name: 'Add User' });
        expect(linkEl).toHaveAttribute('href', '/addUser')
    })

})
