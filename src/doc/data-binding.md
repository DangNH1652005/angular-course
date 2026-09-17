# What is Data Binding
- The communication between the component and the template is called Data Binding
- It allows data to flow in both directions and keeps the UI and logic in sync

# Type of Data Binding
## One-way Binding
1. Event Binding (event)="componentMethod()"
- Component <-- (Event) -- View

2. Property Binding [property]="componentProperty"
- Component -- [property] --> View


3. Interpolation {{ variable }}
- Component --- {{ variable }} -- View

## Two-way Binding
- Systax: [(ngModel)]="componentProperty"

- Allow data pass two way
- Component <---> View

