**RouterLink with url endpoint with a parameter**

```
  <a  [routerLink]="['/firebase', 'new']" > Link </a>
```

** Form handling events **

` (ngSubmit) ` handles the submit event and
  ` #form="ngForm" ` references the template form

```
  <form  (ngSubmit)="save()" #form="ngForm" >  </form>

```

** Bind data to the input ***

Two way property binging `[( ngModel )] `

```
<input [(ngModel)]="dog.name"  name="name" class="form-control" type="text">
```

** Check if the form is valid referencing the template name ***
Disable if the form is not valid
```
<button [disabled]="!form.valid"
```


** Creating a interface  name.interface.ts **

The question mark "?" means optional
```
export interface Dog {
  name: string;
  breed: string;
  bio: string;
  size: string;
  key$?: string;
}

```


** Make use the interface in the module component **

```
dog: Dog = {
  name: '',
  breed: '',
  bio: '',
  size: 'Small',
};

```


** This is how you save from the component to firebase **

```
save() {
  console.log(this.dog);
  // Inject the Service + the Model data
  this.dogsService.newDog( this.dog )
    // Get data with subscribe
    .subscribe( data => {
                            // Route + URL parameter
      this.router.navigate(['firebase', data.name ])
    },
    error => console.log(error);
  );
}

```


** Post request to firebase **

```
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Dog } from '../components/interface/hero.interface';
import 'rxjs/add/operator/map';


@Injectable()
export class DogsService {

  fireURL = 'https://appone-7cdcc.firebaseio.com/dogs.json';

  constructor( private http: Http ) { }

  newDog( dog: Dog ){
    const body = JSON.stringify(dog);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.fireURL, body, { headers })
      .map( res => {
        console.log( res.json() );
        return  res.json();
      })
  }
}


```


** Create a new attribute HTML **

`[attr.ariaValueNow]='progreso'`

```
      <div class="progress">
          <div [attr.ariaValueNow]='progreso'
          class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0"

          [style.width]="progreso + '%' "
          aria-valuemax="100" style="width: 75%">
          </div>
      </div>

```

### Passing data between components

Use `@Input() `








<!--  -->
