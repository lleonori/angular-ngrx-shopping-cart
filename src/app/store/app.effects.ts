import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { ApiService } from '../core/services/api.service';
import { getItems, itemsLoadedSuccess } from './app.actions';

@Injectable()
export class AppEffects {
  // questa funzione restituisce un Observable
  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      // operatore RxJs che permette di lavorare la corretta azione "this.action$.filter(action => action.type === CREATE_TASK)"
      ofType(getItems),
      // approfondimento a questo link https://accademia.dev/flattening-operators-mergemap-switchmap-concatmap-exhaustmap/
      // mergeMap non si interessa dell’ordine: se arrivasse una nuova azione dell’utente,
      // scatenerebbe una seconda chiamata ma non farebbe nulla per modificare o stoppare la chiamata precedente
      mergeMap(() =>
        this.apiService.getItems().pipe(
          //L'operatore map() non fa altro che prendere ciascuna risposta inviata dal server e creiamo un nuovo Observable con il risultato di questa mappatura.
          // Nel nostro caso abbiamo specificato una arrow function che restituisce la risposta a un altra action che simboleggia il successo.
          map((items) => itemsLoadedSuccess({ data: items })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  // tramite createEffect andiamo a creare il nostro effetto
  // questa funzione prende in input una source => una funzione che ritorna observable e config che permette di stabilire se questo effect
  // farà o meno dispach di azioni
  constructor(private apiService: ApiService, private actions$: Actions) {}
}
