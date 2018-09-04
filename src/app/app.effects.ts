import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs/operators';

@Injectable()
export class AppEffects {

  @Effect()
  mapper$ = this.actions$.pipe(map(() => ({ type: 'ANOTHER'})), filter(() => false));

  @Effect({ dispatch: false })
  logger$ = this.actions$.pipe(tap(console.log));

  constructor(private actions$: Actions) {}
}
