const loggedIn=false
export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/' && !loggedIn) {
      return navigateTo('/auth')
    }
});
