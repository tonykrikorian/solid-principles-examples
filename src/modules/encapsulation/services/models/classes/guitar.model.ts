/* eslint-disable prettier/prettier */

import { Guitar } from '../interfaces/guitar.interface';

export default class GuitarModel {
  constructor(public guitarData: Guitar) {}

  public getGuitarInformation() {
    return this.mapGuitarBrandData(this.guitarData);
  }
  private mapGuitarBrandData(guitarData: Guitar) {
    return {
      brand: guitarData.brand,
      model: guitarData.model,
      type: guitarData.type,
      serialNumber: guitarData.serialNumber,
    };
  }
}
