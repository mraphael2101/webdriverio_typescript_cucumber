/** There are several ways to export a class in TypeScript, and the best practice depends on your specific use case and coding style. Here are some common ways to export a class in TypeScript:

 Exporting a named class: You can export a named class using the export keyword before the class declaration. This allows you to import the class using its name in another module.
 // File1.ts
 export class MyClass {
 // class definition
 }

 // File2.ts
 import { MyClass } from './File1';
 Copy
 Exporting a default class: You can also export a default class using the export default keyword before the class declaration. This allows you to import the class without using its name in another module.
 // File1.ts
 export default class MyClass {
 // class definition
 }

 // File2.ts
 import MyClass from './File1';
 Copy
 Exporting an instance of a class: If you want to export an instance of a class, you can create an instance and export it using the export keyword.
 // File1.ts
 class MyClass {
 // class definition
 }
 export const myInstance = new MyClass();

 // File2.ts
 import { myInstance } from './File1';
 Copy
 It’s important to note that you can only have one default export per module
 *
 * */
