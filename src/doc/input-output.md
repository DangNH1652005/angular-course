# input
parent -> data -> child
1. Creates an Input Signal
  - Stores the value received from the parent as a Signal

2. Receives data from the Parent Component
  - Allows the parent to pass a value to the child

3. Read the value using InputSignal()
  - Call the Signal like a function to read its current value

4. Read-only in the Child Component
  - The child can read the value but cannot directly change it

5. Use input.required() when the value is mandatory (bắt buộc)

input('')
input.required<string>()

# output 
parent <- data <- child

1. Creates an Output
  - Creates a communication channal for the child to notify the parent

2. Used to notify the Parent Component
  - The child can inform the parent when somethings happen

3. Emit event using .emit()
  - The child triggers the output by calling .emit()

4. Can emit a value with the event
  - The Child can send data along with the event

5. Parent listens using event binding
  - The parent handles the event using (eventName) systax

# model
`model()` is a two-way binding signal, typically used when building a child component that accepts a value passed down from a parent component—a value which the child component can then modify.

1. Creates a wriable Modal Signal 
  - Creates a Signal that can be both read and updated 

2. Value can be read and updated
  - Both the parent and child can participate in changing the value

3. Support two-way binding
  - Changes made bu either side can be reflected on the other side

4. Use set() and update() to change the value
  - Use these methods to update the Modal Signal in the child

5. Works with [{...}] systax
  - Enables Angular's two-way binding systax for component value
