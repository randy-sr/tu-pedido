
import { formatearDinero } from '../helpers';



test('formatearDinero devuelve el formato correcto para diferentes cantidades', () => {
    expect(formatearDinero(100.00)).toBe('100,00 €');
    expect(formatearDinero(50.99)).toBe('50,99 €');
    expect(formatearDinero(1000000)).toBe('1.000.000,00 €');
  });
  
  