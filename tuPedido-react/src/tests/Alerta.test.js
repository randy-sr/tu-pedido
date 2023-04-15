import { render, screen } from '@testing-library/react'
import Alerta from '../components/Alerta'


describe('Alerta Component', () => {
   it('should render component', ()=> {
     const container = render(<Alerta />)
     expect(container).toBeTruthy()
   })
})
