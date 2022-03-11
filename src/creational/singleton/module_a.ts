import { MyDataBaseClassic } from './db/my-database-classic';

const myDataBaseClassic = MyDataBaseClassic.instance;

const setNameModuleA = () => {
  myDataBaseClassic.add({ name: 'fernando', age: 37 });
  myDataBaseClassic.add({ name: 'rodrigo', age: 25 });
  myDataBaseClassic.add({ name: 'bia', age: 24 });
  myDataBaseClassic.add({ name: 'nei', age: 65 });

  myDataBaseClassic.show();
};

export { myDataBaseClassic, setNameModuleA };
