# MEAN Stack Web Application - Event Organisation

This repository contains the code for a web application named "Event Organisation" developed using the MEAN stack (MongoDB, Express Js, Angular, Node Js). The application facilitates interaction between students and institutes by providing a platform for sharing events, projects, and information.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0-rc.0.

This project is also presented as a research paper at IEEE conference. [Link](https://ieeexplore.ieee.org/document/9760955)

## Features

### MEAN Stack Components: 
  Utilizes MongoDB, Express Js, Angular, and Node Js for a full-stack web development experience. 
### Authentication: 
Implements Angular Auth Guard and JWT (Json Web Token) for secure login credentials. 
### Dynamic Web Application: 
Enables dynamic and interactive client and server-side components. 
###Responsive Design: 
Bootstrap is used for an attractive and responsive graphical user interface.

## Technologies Used

    Angular 12
    Node Js 14.17.3
    Express Js 4.17.12
    MongoDB Compass 1.30.1

## Installation
1. Clone the repository.
Install dependencies for the client side using Angular CLI: 
    ``` bash
    cd ClientApp && npm install
    ```
2. Install dependencies for the server side:
   ```bash
     npm install
   ```
3. Configure MongoDB connection in the server's app.js file.
4. Run the application:
   ```bash
   npm start
   ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
