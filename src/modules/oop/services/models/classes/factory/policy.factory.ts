/* eslint-disable prettier/prettier */

//Abstract creator
abstract class PolicyFactory {
  constructor(public readonly company: string, public readonly policyNumber) {}
  public abstract getPolicy(): IPolicy;
}

//Concrete products
class ChubbPolicies implements IPolicy {
  constructor(public readonly company: string, public readonly policyNumber) {}

  issue(): Record<string, unknown> {
    return {
      company: this.company,
      policy: this.policyNumber,
    };
  }
}

//Concrete product
class BCIPolicies implements IPolicy {
  constructor(
    public readonly company: string,
    public readonly policyNumber,
    public readonly certificate: string,
    public readonly homologation: string,
  ) {}
  issue(): Record<string, unknown> {
    return {
      company: this.company,
      policy: this.policyNumber,
      certificate: this.certificate,
      homologation: this.homologation,
    };
  }
}

//Concrete creator
class ChubbProductFactory extends PolicyFactory {
  constructor(public readonly company: string, public readonly policyNumber) {
    super(company, policyNumber);
  }
  public getPolicy(): IPolicy {
    return new ChubbPolicies(this.company, this.policyNumber);
  }
}

//Concrete creator
class BCIProductFactory extends PolicyFactory {
  constructor(
    public readonly company: string,
    public readonly policyNumber,
    public readonly certificate: string,
    public readonly homologation: string,
  ) {
    super(company, policyNumber);
  }
  public getPolicy(): IPolicy {
    return new BCIPolicies(
      this.company,
      this.policyNumber,
      this.certificate,
      this.homologation,
    );
  }
}

//Product
interface IPolicy {
  issue(): Record<string, unknown>;
}

//Implementation

//Concrete creators
const bci = new BCIProductFactory('BCI', '12345-4', '11', 'HM').getPolicy();
const chubb = new ChubbProductFactory('Chubb', 'P-123456').getPolicy();

console.log(bci.issue());
console.log(chubb.issue());
