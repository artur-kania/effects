import { Injector, InjectionToken } from '@angular/core';
import { EffectsSubscription } from './effects-subscription';


export const afterBootstrapEffects = new InjectionToken<any>('ngrx:effects: Bootstrap Effects');

export function runAfterBootstrapEffects(injector: Injector, subscription: EffectsSubscription) {
  return () => {
    const effectInstances = injector.get(afterBootstrapEffects, false);

    if (effectInstances) {
      subscription.addEffects(effectInstances);
    }
  };
}
