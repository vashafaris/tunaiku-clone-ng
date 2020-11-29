export class Guest {
  loanValue: number;
  loanDuration: number;
  debt: number;
  location: string;
  name: string;
  nik: string;
  phone: string;
  source: string;

  constructor(
    loanValue: number,
    loanDuration: number,
    debt: number,
    location: string,
    name: string,
    nik: string,
    phone: string,
    source: string
  ) {
    this.loanValue = loanValue;
    this.loanDuration = loanDuration;
    this.debt = debt;
    this.location = location;
    this.name = name;
    this.nik = nik;
    this.phone = phone;
    this.source = source;
  }
}
