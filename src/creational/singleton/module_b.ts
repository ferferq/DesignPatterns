import { MyDataBaseClassic } from './db/my-database-classic';
import {
  myDataBaseClassic as myDataBaseClassicModuleA,
  setNameModuleA,
} from './module_a';

const myDataBaseClassic = MyDataBaseClassic.instance;

myDataBaseClassic.add({ name: 'joana', age: 37 });
myDataBaseClassic.add({ name: 'cleia', age: 25 });
myDataBaseClassic.add({ name: 'rafa', age: 24 });
myDataBaseClassic.add({ name: 'kiko', age: 65 });

myDataBaseClassic.show();
console.log('fer');
myDataBaseClassicModuleA.show();
console.log('fer parte 2 chamando o setNameModuleA');
setNameModuleA();
