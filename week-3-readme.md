# Week 3

## Prototype, eg. <Card/>

### In one-liner:

    ```js
    (a) => a+2;
    (a) => {return <Card/>}
    ```

    - Use of curly brackets requires `return` keyword.

### Map

    <Card/>
    arr = [{},{},{}]

    ```js
    arr.map((el) => {
    return <Card name={el.name} name={el.age} name={el.title} />;
    });
    ```
    - map method is the last thing, means you have your data is sorted and ready.

### Key

#### With _index_ if data is stable

- "index" / "i"

  ```js
  arr.map((el, index) => {
    return <Card name={el.name} name={el.age} name={el.title} key={index} />;
  });
  ```

#### With _index_ if data is _un_ stable

- "el.id". Goes into element and checks for id.

  ```js
  arr.map((el, index) => {
    return <Card name={el.name} name={el.age} name={el.title} key={el.id} />;
  });
  ```

## const [isLoggedIn, setIsLoggedIn] = useState(false);

## Tasks:

### Practice: List & keys, conditional rendering.

- Create new array for ten teachers
- Add the start date (2018-08-01)
- Add the location as well.

- Use Array for users

- Modify Team Lead functionality:

  - Display a star if teacher is promoted
  - Use conditional rendering for the button so it displays either "Promote to team Lead" or "Demote from Team Lead".

- Display years worked based on startDate
- Add reminders:
  - To celebrate (message) if years are exactly 5,10,15
  - If years are less than 0.5 (6 months), show message "Schedule probation review".
- Make sure data included employees with 5,10,15 years of working experience as well as with 0.5 working experience.

## Use of spread operator is handy!

```js
name={employee.name}{...employee}
department={employee.department}
salary={employee.salary}
initialRole={employee.initialRole}
startDate={employee.startDate}
location={employee.location}

--->

name={employee.name}{...employee}
```
