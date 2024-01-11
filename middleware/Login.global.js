const loggedIn=true
export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === "/" && !loggedIn) {
      return navigateTo("/auth")
    }
});
