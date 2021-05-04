/* eslint @typescript-eslint/no-magic-numbers: 0 */ 
import { generate as generateCpf } from 'gerador-validador-cpf';
import casual from 'casual'; //https://www.npmjs.com/package/casual
import { addresses } from '@root/src/utils/customer-generator/addresses';
import { ddd } from '@root/src/utils/customer-generator/phone-ddd';

export class Customer {
  private dateNow = Math.floor(Date.now() / 1000);
  private cpfValue: string;
  private firstNameValue: string;
  private lastNameValue: string;
  private emailValue: string;
  private passwordValue: string;
  private legalNameValue: string;
  private dobValue: string;
  private motherNameValue: string;
  private zipCodeValue: string;
  private streetValue: string;
  private addressNumberValue: string;
  private complementValue: string;
  private neighborhoodValue: string;
  private cityValue: string;
  private stateValue: string;
  private phoneNumberValue: string;
  private pinValue: string;
  
  public constructor() {
    
    const cpf = generateCpf({ format: true });
    const firstName = casual.first_name;
    const lastName = casual.last_name;
    const email = `automated+${this.dateNow}@empresa.com`;
    const password = 'qwerty';
    const legalName = `${firstName} ${lastName}`; 
    const dob = this.createValidDob();
    const motherName = casual.full_name;
    const addressIndex = casual.integer(0, addresses.length - 1);
    const zipCode = addresses[addressIndex].zipCode;
    const street = addresses[addressIndex].street;
    const addressNumber = casual.building_number;
    const complement = '';
    const neighborhoodValue = addresses[addressIndex].neighborhood;
    const city = addresses[addressIndex].city;
    const state = addresses[addressIndex].state;
    const dddIndex = casual.integer(0, ddd.length - 1);
    const phoneNumber = casual.numerify(`(${ddd[dddIndex].code})9####-####`);
    const pin = '1379';

    this.cpfValue = cpf;
    this.firstNameValue = firstName;
    this.lastNameValue = lastName;
    this.emailValue = email;
    this.passwordValue = password;
    this.legalNameValue = legalName;
    this.dobValue = dob;
    this.motherNameValue = motherName;
    this.zipCodeValue = zipCode;
    this.streetValue = street;
    this.addressNumberValue = addressNumber;
    this.complementValue = complement;
    this.neighborhoodValue = neighborhoodValue;
    this.cityValue = city;
    this.stateValue = state;
    this.phoneNumberValue = phoneNumber;
    this.pinValue = pin;
  }

  private createValidDob(): string {
    const day = ("0" + casual.integer(1, 28)).slice(-2);
    const month = ("0" + casual.integer(1, 12)).slice(-2);
    const year = casual.integer(1920, 2001);
    return `${day}/${month}/${year}`;
  }

  public get cpf(): string {
    return this.cpfValue;
  }

  public get firstName(): string {
    return this.firstNameValue;
  }

  public get lastName(): string {
    return this.lastNameValue;
  }

  public get email(): string {
    return this.emailValue;
  }

  public get password(): string {
    return this.passwordValue;
  }

  public get legalName(): string {
    return this.legalNameValue;
  }

  public get dob(): string {
    return this.dobValue;
  }

  public get motherName(): string {
    return this.motherNameValue;
  }

  public get zipCode(): string {
    return this.zipCodeValue;
  }

  public get street(): string {
    return this.streetValue;
  }

  public get addressNumber(): string {
    return this.addressNumberValue;
  }

  public get complement(): string {
    return this.complementValue;
  }

  public get neighborhood(): string {
    return this.neighborhoodValue;
  }

  public get city(): string {
    return this.cityValue;
  }

  public get state(): string {
    return this.stateValue;
  }

  public get phoneNumber(): string {
    return this.phoneNumberValue;
  }

  public get pin(): string {
    return this.pinValue;
  }

}