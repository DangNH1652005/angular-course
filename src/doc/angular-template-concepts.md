# Template Expression Operators
1. Arithmetic Operators
EX: 
  {{ price * quantity }}

2. Comparision Operators
Ex:
  {{ price > quantity }}

3. Ternary Operators
Ex: 
  {{ price > 100 ? 'Expensive' : 'Affordable' }}

4. Nullish Coalescing Operators
- ?? -> Provides a fallback for null or undefined
Ex:
  {{ price ?? 0 }}

# $event in Angular Templates
1. Typing in an Input
Ex:
  <input (input)="getValue($event)">

2. Clicking a Button
Ex:
  <button (click)="handleClick($event)">Click</button>

3. Pressing a Keyboard Key 
Ex:
  <input (keyup)="handleKey($event)">

# Template Reference Variables (#)
- HTML Elements 
Access element properties and values

- Components
Access the component instance, properties, and method

- Template
Create a reference to an <ng-template>

- Directives
Access the directive instance properties, and methods
