import { render, screen, fireEvent} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import User from "../pages/user";
jest.mock('react-redux', () => {
    return {
        ...jest.requireActual('react-redux'),
        useSelector: jest.fn().mockImplementation(() => ({})),
        useDispatch: () => jest.fn(),
    };
});
describe("Add User Form Test Case", ()=>{
    test("Placeholder should be rendered", () => {
        render(<BrowserRouter><User /></BrowserRouter>)
        const userPlaceholder = screen.getByPlaceholderText("username")
        expect(userPlaceholder).toBeInTheDocument()
        const emailPlaceholder = screen.getByPlaceholderText("email")
        expect(emailPlaceholder).toBeInTheDocument()
        const inputPlaceholder = screen.getByPlaceholderText("phone")
        expect(inputPlaceholder).toBeInTheDocument()
    })
    test('button should be rendered', () => {
        render(<BrowserRouter><User /></BrowserRouter>);
        const buttonEl = screen.getByText('Submit')
        expect(buttonEl).toBeInTheDocument()
    })
    test("button should be disabled", () => {
        render(<BrowserRouter><User /></BrowserRouter>);
        const buttonDisabled = screen.getByText('Submit')
        expect(buttonDisabled).toBeDisabled()
    })
    test('Username Should Be Change', () => {
        render(<BrowserRouter><User /></BrowserRouter>);
        const usernameElementEl: HTMLInputElement = screen.getByPlaceholderText(/username/i)
        const usernameTestVal = "test username";
        fireEvent.change(usernameElementEl, { target: { value: usernameTestVal } })
        expect(usernameElementEl.value).toBe(usernameTestVal);
    })
    test("Email Should Be Change", () => {
        render(<BrowserRouter><User /></BrowserRouter>);
        const emailElementEl: HTMLInputElement = screen.getByPlaceholderText(/email/i)
        const emailTestVal = "test email";
        fireEvent.change(emailElementEl, { target: { value: emailTestVal } })
        expect(emailElementEl.value).toBe(emailTestVal);
    })
    test("Phone Should Be Change", () => {
        render(<BrowserRouter><User /></BrowserRouter>);
        const phoneElementEl: HTMLInputElement = screen.getByPlaceholderText(/phone/i)
        const phoneTestVal = "test phone";
        fireEvent.change(phoneElementEl, { target: { value: phoneTestVal } })
        expect(phoneElementEl.value).toBe(phoneTestVal);
    })
})


