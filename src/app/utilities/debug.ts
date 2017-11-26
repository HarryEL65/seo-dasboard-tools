// import { Observable } from 'rxjs/Observable';


// const debbugerOn = true;

// Observable.prototype.debug = function(message: string){
//   return this.do(
//     nextValue => {
//       if (debbugerOn) {
//           console.log(`%c ${message}`, 'color:green;font-weight:bold', nextValue);
//       }
//     },
//     error => {
//       if (debbugerOn) {
//         console.log(`%c ${message}`, 'color:red;font-weight:bold', error);
//       }
//     },
//     () => {
//       if (debbugerOn) {
//           console.log(`%c ${message}`, 'color:yellow;font-weight:bold');
//       }
//     }
//   );
// };

// // extending the Observable interface
// // Will be merged with the already existing Observable Interface definition
// declare module 'rxjs/Observable' {
//   // tslint:disable-next-line:no-shadowed-variable
//   // defining the new extension type Observable that has a generic
//   // type of T and we are adding the debug function that takes any number
//   // of arguments and return an Observable of the same type in the  manner of do
//   // tslint:disable-next-line:no-shadowed-variable
//   interface Observable<T> {
//     debug: (...any) => Observable<T>;
//   }
// }
