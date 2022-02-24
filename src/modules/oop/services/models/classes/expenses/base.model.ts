/* eslint-disable prettier/prettier */
export default abstract class BaseModel {
  public id: number;
  public name: string;
  public ammount: number;
  public createdAt: string;

  constructor() {
    this.createdAt = this.createDate();
    this.id = this.generateId();
  }
  private generateId(): number {
    return Math.floor(Math.random() * 10);
  }

  private createDate() {
    return new Date().toLocaleString();
  }
  protected abstract save(): void;
}
