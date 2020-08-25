function call2(this, params) {
    
}
const name = 'window';
const obj = {
  name: 'marin',
};

function getName() {
  console.log(this.name);
}
getName.call2(obj);
