/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable prettier/prettier */

//Abstract Factory
abstract class AmplifiersFactory {
  public abstract getAmplifiers(): IAmplifier;
}

//Abstract Factory
abstract class MarshallAmplifiersFactory extends AmplifiersFactory {}

//Abstract Factory
abstract class FenderAmplifiersFactory extends AmplifiersFactory {}

//Abstract Factory
abstract class LaneyAmplifiersFactory extends AmplifiersFactory {}

//Laney concrete product
class LaneyIronHeart implements ILaneyAmplifier {
  sound(volume: number): void {
    console.log(`Sueno como Laney Iron Heart a tubos a ${volume} db`);
  }
}

//Fender concrete product
class FenderTwinReverb implements IFenderAmplifier {
  sound(volume: number): void {
    console.log(`Sueno como Fender Twin reverb a tubos a ${volume} db`);
  }
}

//Marshall concrete product
class MarshallJCM800 implements IMarshallAmplifier {
  sound(volume: number): void {
    console.log(`Sueno como Marshall JCM 800 a tubos a ${volume} db`);
  }
}

//Marshall concrete creator
class MarshallJCM800Factory extends MarshallAmplifiersFactory {
  public getAmplifiers(): IAmplifier {
    return new MarshallJCM800();
  }
}

//Fender concrete creator
class FenderTwinReverbFactory extends FenderAmplifiersFactory {
  public getAmplifiers(): IAmplifier {
    return new FenderTwinReverb();
  }
}

//Laney concrete creator
class LaneyIronHeartFactory extends LaneyAmplifiersFactory {
  public getAmplifiers(): IAmplifier {
    return new LaneyIronHeart();
  }
}
//Generic Product
interface IAmplifier {
  sound(volume: number): void;
}

//MarshallProduct
interface IMarshallAmplifier extends IAmplifier {}

//MarshallProduct
interface IFenderAmplifier extends IAmplifier {}
//LaneyProduct
interface ILaneyAmplifier extends IAmplifier {}

//Llamadas

// const marshallAmps: AmplifiersFactory = new MarshallJCM800Factory();
// const fenderAmps: AmplifiersFactory = new FenderTwinReverbFactory();
// const laneyAmps: AmplifiersFactory = new LaneyIronHeartFactory();

// marshallAmps.getAmplifiers().sound(4);
// fenderAmps.getAmplifiers().sound(2);
// laneyAmps.getAmplifiers().sound(8);

/******************************************************************************* */
/** Speaker Factory                                                                            **/
/******************************************************************************* */

//Abstract Factory
abstract class SpeakerFactory {
  public abstract getSpeaker(): ISpeaker;
}

abstract class CelestionSpeakerFactory extends SpeakerFactory {}

//Concrete product
class CelestionGreenBack implements ISpeaker {
  constructor(
    private readonly power: number,
    private readonly impedance: number,
  ) {}
  sound(): void {
    console.log('Sueno como Celestion GreenBack');
  }
}

//Concrete product
class CelestionHeritage implements ISpeaker {
  constructor(
    private readonly impedance: number,
    private readonly sensitivity: number,
  ) {}
  sound(): void {
    console.log('Sueno como Celestion Heritage');
  }
}

//Concrete creator GreenBack
class CelestionGreenBackFactory extends CelestionSpeakerFactory {
  constructor(
    private readonly power: number,
    private readonly impedance: number,
  ) {
    super();
  }
  public getSpeaker(): ISpeaker {
    return new CelestionGreenBack(this.power, this.impedance);
  }
}
//Concrete creator Heritage
class CelestionHeritageFactory extends CelestionSpeakerFactory {
  constructor(
    private readonly impedance: number,
    private readonly sensitivity: number,
  ) {
    super();
  }
  public getSpeaker(): ISpeaker {
    return new CelestionHeritage(this.impedance, this.sensitivity);
  }
}

//Product
interface ISpeaker {
  sound(): void;
}

// const greenBack: CelestionSpeakerFactory = new CelestionGreenBackFactory(30, 8);
// const heritage: CelestionSpeakerFactory = new CelestionHeritageFactory(8, 96);

// greenBack.getSpeaker().sound();
// heritage.getSpeaker().sound();

/*************************************************************************************** */
/**     Strategy pattern                                                                 */
/*************************************************************************************** */

class FullAmplifierContext {
  constructor(preAmpli: IAmplifier, speakers: ISpeaker) {
    this._preAmp = preAmpli;
    this._speaker = speakers;
  }
  private _preAmp: IAmplifier;

  public set preAmp(value: IAmplifier) {
    this._preAmp = value;
  }
  private _speaker: ISpeaker;

  public set speaker(value: ISpeaker) {
    this._speaker = value;
  }

  sound(volume: number): void {
    this._preAmp.sound(volume);
    this._speaker.sound();
  }
}

const marshallAmps1: AmplifiersFactory = new MarshallJCM800Factory();
const fenderAmps1: AmplifiersFactory = new FenderTwinReverbFactory();
const laneyAmps1: AmplifiersFactory = new LaneyIronHeartFactory();

const greenBack1: CelestionSpeakerFactory = new CelestionGreenBackFactory(
  30,
  8,
);
const heritage1: CelestionSpeakerFactory = new CelestionHeritageFactory(8, 96);

const customAmplifier = new FullAmplifierContext(
  marshallAmps1.getAmplifiers(),
  greenBack1.getSpeaker(),
);

customAmplifier.sound(10);

customAmplifier.preAmp = fenderAmps1.getAmplifiers();
customAmplifier.speaker = heritage1.getSpeaker();

customAmplifier.sound(7);

customAmplifier.preAmp = laneyAmps1.getAmplifiers();
customAmplifier.speaker = greenBack1.getSpeaker();

customAmplifier.sound(8);

customAmplifier.preAmp = laneyAmps1.getAmplifiers();
customAmplifier.speaker = heritage1.getSpeaker();

customAmplifier.sound(8);
