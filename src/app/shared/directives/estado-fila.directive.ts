import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appEstadoFila]'
})
export class EstadoFilaDirective {

  @Input('appEstadoFila') estado!: string;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const bg = {
      P: '#fff7ed',
      A: '#ecfdf5',
      R: '#fef2f2'
    }[this.estado] || '#fff';

    this.el.nativeElement.style.backgroundColor = bg;
  }

}
