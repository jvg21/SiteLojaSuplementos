import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep'
})
export class CepPipe implements PipeTransform {

  transform(cpf: string): string {
    // Remover caracteres não numéricos

    const apenasNumeros = cpf.replace(/\D/g, '');

    // Aplicar a máscara para o CPF XXX.XXX.XXX-XX
    const parte1 = apenasNumeros.slice(0, 5);
    const parte2 = apenasNumeros.slice(5, 8);
    

    let cepFormatado = '';

    if (parte1) {
      cepFormatado += `${parte1}`;
    }

    if (parte2) {
      cepFormatado += `-${parte2}`;
    }


    return cepFormatado;
  }

}
