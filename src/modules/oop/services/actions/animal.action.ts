/* eslint-disable prettier/prettier */

import Buitre from '../models/classes/animals/buitre.model';
import Leon from '../models/classes/animals/leon.model';

const leon = new Leon();

leon.nombre = 'simba';
leon.correr();

const buitre = new Buitre();

buitre.nombre = 'Condorito';
buitre.volar();
