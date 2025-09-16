import { Component, input, InputSignal, effect, signal, output } from '@angular/core';
import { EstadoTextoAhorcado } from './estado-texto-ahorcado.interface';

@Component({
  selector: 'app-texto-ahorcado',
  imports: [],
  templateUrl: './texto-ahorcado.html',
  styleUrl: './texto-ahorcado.css'
})
export class TextoAhorcado {

  public palabra: InputSignal<string> = input.required<string>();
  public letraSignal: InputSignal<string> = input<string>('');
  public estadoCambio = output<EstadoTextoAhorcado>();

  private readonly _letrasfalladas : string[] = [];
  private readonly _letrasAcertadas : string[] = [];
  private _letrasRecibidas : string[] = []
  private  _intentos: number = 0;


  constructor() {
    effect(() => {
      const letra = this.letraSignal();
      if (letra 
          && letra.length == 1) {
        this._intentos++;
        if(this.comprobarSiLaLetraYaSeHaProbado(letra)){
          this.estadoCambio.emit(this.obtenerEstado())
          return;
        }
        this._letrasRecibidas = [...this._letrasRecibidas, letra];
        if(this.contieneLetraLaPalabra(letra)){
          this._letrasAcertadas.push(letra)
            this.estadoCambio.emit(this.obtenerEstado());
        } else{
            this._letrasfalladas.push(letra);
            this.estadoCambio.emit(this.obtenerEstado());
        }
      } 
    });
  }

  public estaLetraAcertada(letra: string) : boolean {
    return this._letrasAcertadas.includes(letra)
  }

  public contieneLetraLaPalabra(letra: string) : boolean {
    return this.palabra().includes(letra)
  }

  private obtenerEstado() : EstadoTextoAhorcado {
    return {
      numLetras: this._letrasRecibidas.length,
      completada: this.comprobarSiLaPalabraEstaAcertada(),
      letrasAcertadas: this._letrasAcertadas,
      letrasUsadas: this._letrasRecibidas,
      numLetrasAcertadas: this._letrasAcertadas.length,
      intentos: this._intentos
    };
  }

  public comprobarSiLaLetraYaSeHaProbado(letra : string) : boolean {
    return this._letrasRecibidas.includes(letra);
  }

  public comprobarSiLaPalabraEstaAcertada() : boolean {
    return this.palabra().split("").every(l => this.estaLetraAcertada(l));
  }

}
