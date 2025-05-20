# JSON Factory & Cars – Data Structure

This exercise explores two ways of representing the relationship between a car factory and its associated cars using JSON files.

## 1. Separate Files

- **factory.json**  
  Contains the factory information (name, location, year of establishment, manager, etc.) and a `carIds` array listing the IDs of the cars produced by the factory.
- **cars.json**  
  Contains an array of car objects, each with its own details (make, model, year, features, etc.) and a `factoryId` field linking each car to its factory.

**Advantages:**  
- Greater flexibility and scalability: cars can be managed separately from the factory.
- Easier to update or add cars without modifying the factory file.

**Relationship example:**
```json
// factory.json
{
  "id": "factory001",
  "name": "Global Auto Factory",
  "carIds": ["car001", "car002", ...]
}

// cars.json
[
  {
    "id": "car001",
    "make": "Toyota",
    "factoryId": "factory001"
  },
  ...
]
```

## 2. Variant with Embedded Cars

- **factory-with-cars-embedded.json**  
  Contains all the factory information and, inside the `cars` property, a complete array of car objects produced by that factory.

**Advantages:**  
- All data related to the factory and its cars is contained in a single file.
- Easier to read and transfer as a single data block.

**Example:**
```json
{
  "id": "factory001",
  "name": "Global Auto Factory",
  "cars": [
    {
      "id": "car001",
      "make": "Toyota",
      "model": "Corolla"
    },
    ...
  ]
}
```

---

## Conclusions

- **Separate files**: useful for more complex systems or when multiple entities need to be managed independently.
- **Embedded**: practical for exports, demos, or when the data is tightly coupled and does not change often.

Both solutions are valid; the choice depends on the application's needs and how frequently the data is updated.

---

**Files in the `json/` folder:**
- `factory.json`
- `cars.json`
- `factory-with-cars-embedded.json`

## Author ✍️

**Luca Montanaro** `WDV 24-26`  
*luca.montanaro@edu-its.it*  
[Github profile](https://github.com/LucaM0nt)