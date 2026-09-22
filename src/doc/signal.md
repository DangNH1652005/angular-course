# What is signal
- A signal is a reactive value that Angular can track. Think of it as a reactive container around a value

# Why we need signal
- Reactive state management
- Angular can track state changes
- Automatically update the UI when state changes
- More precise and efficient reactivity
- Modern approach to state management in Angular

# Types/Categories of Signals
## Writable Signal: signal()
- They can be read and modified using set() and update() methods

## Computed Signal: computed()
  - They are read-only derived signals whose value is calculated from other signals
  - Derived State: Creates a value based on one or more existing Signals
  - Lazy Evaluation: The computed value is evaluated when it is needed
  - Memoization: Angular caches the computed result until its dependencies change
  - Read-Only: A Computed Signal cannot be directly updated using set() or update()
  - Automatic Dependency Tracking: Angular Automatically tracks the Signals used by the computation

## effect()
  - Reactive side effects: Runs code in response to changes in Singal state
  - Automatic Dependency Tracking: Angular tracks the Signals read inside the effect
  - Logging & Browser APIs: Can be used for logging or interacting with Browser APIs such as localStorage

## asReadonly()
  - asReadonly(): Creates a read-only view of a Writable Singal
  - Encapsulation: Keeps the internal state protected from direct modification.
  - Controlled State Access: Allows consumers to read state without changing it.
  - Private Wriable State: The original signal remains writable inside its owner
  - Public Readonly State: Other parts of the application receive only read access


computed() -> effect() -> asReadonly() -> Signal + Service()

Note: effect API used to ferform an action
