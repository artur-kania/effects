import { InjectionToken, OnDestroy } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
export declare const effects: InjectionToken<any>;
export declare class EffectsSubscription extends Subscription implements OnDestroy {
    private store;
    parent: EffectsSubscription;
    constructor(store: Observer<Action>, parent: EffectsSubscription, effectInstances?: any[]);
    addEffects(effectInstances: any[]): void;
    ngOnDestroy(): void;
}
