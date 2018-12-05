# Javascript-Calculator
> This is a Simple Javascript Calculator
<p align="center">
  <img src="./src/images/calc.png" width="350" title="Calculator">
</p>

### Demo
[Demo](https://js-calculator.now.sh/)

### Features
- Support Keyboard Key bindings;
- Type 0 to 9 Numbers;
- Shift plus + : will add the Numbers;
- Shift plus * : will multiply the Numbers;
- -: will subtract the Numbers;
- / : will divide the Numbers;
- = : will give the Output;


## Note
#### Add index.js to your html file

## Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Calculator</title>
    <script src="../node_modules/src/index.js"></script>
</head>
<body>
</body>
</html>
```


Step 1: add some class to the div.

```html
<div class="wrapper"></div>
```

Step 2: Initialize the plugin on your page. For example

```javascript
// initialize with defaults
$(".wrapper").javascriptCalcInit();
```
### Using NPM
To install using the `npm` package manager run:

`$ npm install javascript-calculator`