import { ElementRef } from '@angular/core';
import { EstadoFilaDirective } from './estado-fila.directive';

describe('EstadoFilaDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = new ElementRef(document.createElement('tr'));
    const directive = new EstadoFilaDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
