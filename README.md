# @beanc16/utility-types

Utility types for TypeScript.



## Table of Contents
- [@beanc16/utility-types](#beanc16utility-types)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
    - [Optional](#optional)
    - [NonOptional](#nonoptional)
  - [License](#license)


## Install
This is a [Node.js](https://nodejs.org/en/) module available through the github registry.

```bash
$ npm install @beanc16/utility-types
```



## Usage

### Optional
Add `?:` to the given parameters on type.
```ts
import type { Optional } from '@beanc16/utility-types';

type SomeInterface = {
  param1: string;
  param2: string;
  param3: string;
}

type SomeInterfaceWithOptionals = Optional<SomeInterface>;
// Result:
/*
type SomeInterfaceWithOptionals = {
  param1?: string | undefined;
  param2?: string | undefined;
  param3?: string | undefined;
}
*/

type SomeInterfaceWithOptionals = Optional<SomeInterface, 'param1' | 'param2'>;
// Result:
/*
type SomeInterfaceWithOptionals = {
  param1?: string | undefined;
  param2?: string | undefined;
  param3: string;
}
*/
```

### NonOptional
Exclude `?:` parameters from type.
```ts
import type { NonOptional } from '@beanc16/utility-types';

type SomeInterfaceWithOptionals = {
  param1?: string;
  param2?: string;
  param3: string;
}

type SomeInterface1 = NonOptional<SomeInterfaceWithOptionals>;
// Result:
/*
type SomeInterface = {
  param1: string;
  param2: string;
  param3: string;
}
*/

type SomeInterface2 = NonOptional<SomeInterfaceWithOptionals, 'param1'>;
// Result:
/*
type SomeInterface = {
  param1: string;
  param2?: string | undefined
  param3: string;
}
*/
```



## License
[MIT](https://choosealicense.com/licenses/mit/)
