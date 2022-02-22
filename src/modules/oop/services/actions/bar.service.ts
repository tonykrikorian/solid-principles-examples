/* eslint-disable prettier/prettier */
import Bar from '../models/classes/bar/bar.model';
import Cantinero from '../models/classes/bar/cantinero.model';
import Cliente from '../models/classes/bar/cliente.model';
import Conserje from '../models/classes/bar/conserje.model';
import Mesero from '../models/classes/bar/mesero.model';
import Persona from '../models/classes/bar/persona.model';

const bar = new Bar();

const containero: Persona = new Cantinero('Cantinero');
const cliente: Persona = new Cliente('Tony');
const mesero: Persona = new Mesero('Tony');
const conserje: Persona = new Conserje('Adan');

bar.entrar(conserje);
bar.entrar(cliente);
