// https://platzi.com/clases/1787-spa-javascript/25888-conectar-las-rutas-con-los-templates/

const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }
  return `/${route}`; // /about
}

export default resolveRoutes;