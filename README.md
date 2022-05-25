# Citypop
> A react native application bootstrapped with expo typescript starter template
> Search for cities from [Api Ninja](https://api-ninjas.com/api/city) and display its population
> Search for countries from [Geonames](http://www.geonames.org/export/geonames-search.html) sort by highest population. 
## Getting Started 

### Clone the repository

```bash
git clone https://github.com/Braggedtooth/Citypop.git 
git clone git@github.com:Braggedtooth/Citypop.git
gh repo clone Braggedtooth/Citypop
```
### Install the packages 
```
yarn install
```
## Scripts

```bash
    yarn start : Starts the application using expo

    yarn test : Runs tests using jest

    yarn format : formats code using prettier
```
### Folder Structure
> assets: contains images and favicons
> 
> components : contains components and test for each component
> 
> types : Typings for components and so on
> 
> utils : hooks and utility functions
> 
> views : Navigator and screens


```filetree
├───assets
│       adaptive-icon.png
│       favicon.ico
│       favicon.png
│       icon.png
│       splash.png
├───components
│   │   CityResults.tsx
│   │   CountryResults.tsx
│   │   Error.tsx
│   │   LogoText.tsx
│   │   searchBar.tsx
│   │
│   └───__tests__
│         CityResults.test.tsx
│         CountryResults.test.tsx
│         Error.test.tsx
│         LogoText.test.tsx
│         SearchBar.test.tsx       
├───types
│       Components.ts
│       Navigator.ts
│       Response.ts
├───utils
│       api.ts
│       useCity.ts
│       useCountry.ts
│       useDeboucedValue.ts
│       useNavigate.ts
└───views
        City.tsx
        Country.tsx
        Home.tsx
        Screens.tsx
```

## Packages 
### [Node v16.13.0](https://nodejs.org/en/docs/)
### [Yarn 1.22.18](https://yarnpkg.com/getting-started)
### [React Native](https://reactnative.dev/) 
### [Expo v45.0.0](https://docs.expo.dev/)
### [React Navigation](https://reactnavigation.org/docs/) 
### [React Query](https://react-query.tanstack.com/) 
### [Typescript v4.3.5](https://www.typescriptlang.org/docs/)
### [React Native Elements](https://reactnativeelements.com/docs) 
### [Jest](https://jestjs.io/docs/getting-started)


## Author

### [Adebayo Ajayi](https://github.com/Braggedtooth)

