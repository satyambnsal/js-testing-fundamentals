## Jest Overview

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.



## Jest Matchers
* toBe
* toEqual
* toBeNull
* toBeUndefined
* toBeTruthy
* toBeFalsy
  
### Jest mathers of comparing Numbers

* toBeGreaterThan
* toBeGreaterThanOrEqual
* toBeLessThan
* toBeLessThanOrEqual
* toBeCloseTo  (for floating point equality)
  
### Jest mathers of comparing Strings
* toMatch
  Example:
  ```
  expect('satyam').toMatch(/tya/)
  ```

### Array and iterables

You can check if an array or iterable contains a particular item using `toContain`


## Mock Functions

Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function, capturing instances of constructor functions when instatiated with `new`, and allowing test time configuration of return values.


All mock functions have special `.mock` property, which is where data about how the function has been called and what the function returned is kept.

Mock functions can also be used to inject test values in your code during a test.


The more your tests resemble the way your software is used, the more confidence they can give you.