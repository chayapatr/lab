import Module from './test.c';
const Instance = Module();

Instance.then(()=>{
    console.log(Instance._add(10,20));
});