// https://platzi.com/clases/1787-spa-javascript/25888-conectar-las-rutas-con-los-templates/
const getHash = () => location
  .hash.slice(1).toLocaleLowerCase().split('/')[1]  || '/';

export default getHash;