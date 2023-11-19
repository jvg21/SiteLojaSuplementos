import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {
  transform(cpf: string): string {
    // Remover caracteres não numéricos

    const apenasNumeros = cpf.replace(/\D/g, '');

    // Aplicar a máscara para o CPF XXX.XXX.XXX-XX
    const parte1 = apenasNumeros.slice(0, 3);
    const parte2 = apenasNumeros.slice(3, 6);
    const parte3 = apenasNumeros.slice(6, 9);
    const parte4 = apenasNumeros.slice(9, 11);

    let cpfFormatado = '';

    if (parte1) {
      cpfFormatado += `${parte1}`;
    }

    if (parte2) {
      cpfFormatado += `.${parte2}`;
    }

    if (parte3) {
      cpfFormatado += `.${parte3}`;
    }

    if (parte4) {
      cpfFormatado += `-${parte4}`;
    }

    return cpfFormatado;
  }
}

