# What is routing
- Routing is the mechanism Angular uses to display different components based on the URL.

```
<a routerLink="/pages/products">Products</a>
<a [routerLink]="'/pages/products'">Products</a>
<a [routerLink]="['/pages/products', id]">Products</a>
```

# Programmatic Navigation
1. Navigate()
- The navigate() method accepts the route as an array of route segments
Systax:

```
this.router.navigate(['/home'])
```

2. navigateByUrl()
- accepts the route as a string

```
this.router.navigateByUrl("/home")
```

# Route Parameters
# Query Parameters
# Child Routes
# Lazy Loading
## Types of Loading techniques
1. Eager Loading
- loads components, when the application starts
Ex:

```
{
  path: 'pages/profile',
  components: Profile
}
```

2. Lazy Loading
- loads components on demand, as the user navigates throught the application
Ex: 

```
{
  path: 'profile', loadComponent: () => import('./pages/profile/profile').the(c =>c.Profile)
}
```

3. Preloading
- Preloading is a combination of both Eager and Lazy Loading
Ex: 

```
export const appConfig: ApplicationConfig = {
  provideRouter(routes, withPreloading(PreloadAllModules))
}
```

# Route Guards
## Types of Route Guards
1. CanActive
- Controls access to a route 

2. CanActiveChild
- Controls access to child or nested route

3. CanDeactive
- Controls whether a user can leave a route 

4. CanMatch
- Controls whether a route should be considered during route matching




