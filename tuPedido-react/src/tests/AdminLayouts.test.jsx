// import { render, screen } from '@testing-library/react'
// import AdminLayouts from '../layouts/AdminLayouts'

// describe('AdminLayouts', () => {

//     it('should render', () => {
//         const container = render(<AdminLayouts />)
//         expect(container).toBeTruthy()
//     })
// })

import { render } from '@testing-library/react';
import useAuth from '../hooks/useAuth';
import AdminLayouts from '../layouts/AdminLayouts';

jest.mock('../hooks/useAuth');

describe('Component', () => {
  it('should call useAuth with middleware admin', () => {
    const expectedMiddleware = 'admin';
    useAuth.mockReturnValue({ middleware: expectedMiddleware });

    render(<AdminLayouts />);

    expect(useAuth).toHaveBeenCalledWith({ middleware: expectedMiddleware });
  });
});