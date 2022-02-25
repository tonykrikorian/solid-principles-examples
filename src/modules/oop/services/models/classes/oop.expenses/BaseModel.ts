/* eslint-disable prettier/prettier */
export abstract class BaseModel {
  protected id: number;
  protected createdAt: string;
  constructor() {
    this.id = this.generateId();
    this.createdAt = new Date().toLocaleDateString();
  }

  private generateId() {
    return Math.floor(Math.random() * 10);
  }
}
