#  Angular Login Set up and testing

## Prerequisites
  - [NodeJs](https://nodejs.org/en/)
  - [Angular CLI](https://cli.angular.io/)
  - [Chrome(or different browser)](https://cli.angular.io/)


## To run the app 

```sh
$ git clonehttps://github.com/TshepzMogapi/angular-base.git
$ cd angular-base
$ npm install
$ ng serve
```

## To test the app 

```sh
$ cd angular-base
$ ng test  --code-coverage
$ check terminal/command line for instructions on wtahcing test-coverage
```



## What to improve
> The testing can be improved by testing different states of the html elements e.g by checking whether the button is in the state that is desired according to the requirements and whether is contains specific texts. The form can container error messages to hint to the user what they should do when the app is running and they have just entered invalid data. The form submission can then trigger those error messages and the testing checks whether those errors appear when different controls are invalid. Alternatively the form can also throw thess errors/ hint to the end user when they just entered data and leave a specific field/ form control i.e. the control has been touched and left.
