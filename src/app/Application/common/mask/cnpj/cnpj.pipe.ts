import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {
  transform(cnpj: string): string {
    // Remove non-numeric characters
    const apenasNumeros = cnpj.replace(/\D/g, '');

    // Apply the mask for CNPJ XX.XXX.XXX/XXXX-XX
    const parte1 = apenasNumeros.slice(0, 2);
    const parte2 = apenasNumeros.slice(2, 5);
    const parte3 = apenasNumeros.slice(5, 8);
    const parte4 = apenasNumeros.slice(8, 12);
    const parte5 = apenasNumeros.slice(12, 14);

    let cnpjFormatado = '';

    if (parte1) {
      cnpjFormatado += `${parte1}`;
    }

    if (parte2) {
      cnpjFormatado += `.${parte2}`;
    }

    if (parte3) {
      cnpjFormatado += `.${parte3}`;
    }

    if (parte4) {
      cnpjFormatado += `/${parte4}`;
    }

    if (parte5) {
      cnpjFormatado += `-${parte5}`;
    }

    return cnpjFormatado;
  }
}