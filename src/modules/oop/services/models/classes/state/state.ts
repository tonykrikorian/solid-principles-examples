/* eslint-disable prettier/prettier */

//IState
interface IState {
  action(customerContext: CustomerContext, ammount: number): void;
}

//Context
class CustomerContext {
  private _state: IState;

  private _residue: number;
  public get residue(): number {
    return this._residue;
  }
  public set residue(value: number) {
    this._residue = value;
  }

  public get state(): IState {
    return this._state;
  }
  public set state(value: IState) {
    this._state = value;
  }

  constructor() {
    this._state = new NewState();
  }

  public request = (ammount: number) => this._state.action(this, ammount);

  public discount = (ammount: number) => (this._residue -= ammount);
}

//Concrete state
class NewState implements IState {
  action(customerContext: CustomerContext, ammount: number): void {
    console.log(`Se le pone dinero a su saldo ${ammount}`);
    customerContext.residue = ammount;

    //Una vez se lo ponga dinero puedo cambiar el estado a No Deudor
    customerContext.state = new NodebtorState();
  }
}

//Concrete State
class NodebtorState implements IState {
  action(customerContext: CustomerContext, ammount: number): void {
    if (ammount <= customerContext.residue) {
      customerContext.discount(ammount);
      console.log(
        `Operación permitida, gasta ${ammount} y te queda ${customerContext.residue}`,
      );

      if (customerContext.residue <= 0)
        customerContext.state = new DebtorState();
    } else {
      console.log(
        `No ajustas a lo solicitado, tienes ${customerContext.residue} y quieres gastar ${ammount}`,
      );
    }
  }
}

//Concrete State
class DebtorState implements IState {
  action(customerContext: CustomerContext, ammount: number): void {
    console.log('No puedes comprar poque eres un deudor');
  }
}

//Implementacion
const customerContext = new CustomerContext();
console.log(customerContext.state);

customerContext.request(100);
console.log(customerContext.state);

customerContext.request(50);
console.log(customerContext.state);

customerContext.request(50);
console.log(customerContext.state);

customerContext.request(50);
console.log(customerContext.state);
