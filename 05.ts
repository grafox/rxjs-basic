
console.clear();

// begin lesson code
import { of } from 'rxjs';
// pipeable operators are imported from rxjs/operators
import { map, filter } from 'rxjs/operators';

/*
 * Pipeable operators generally accept some config, returning
 * a function with takes the source observable. So one way to use would
 * be like below...
 */
map((value: any) => value + 10)(of(1,2,3,4,5)).subscribe(console.log);

/*
 * This is already pretty ugly though, imagine using multiple operators...
 */
filter((value: any) => value === 15)(map((value: any) => value + 10)(of(1,2,3,4,5))).subscribe(console.log);

/*
 * The pipe method handles this for us, invoking the next operator
 * with the observable returned from the previous. This lets use much more
 * easily visualize the flow of data through our observables. 
 * On subscription, each operator subscribes to it's source (observable),
 * then data flows downward through each operator until it reaches
 * your registered observer.
 */
of(1,2,3,4,5).pipe(
  map(value => value + 10),
  filter(value => value === 15)
).subscribe(console.log);

