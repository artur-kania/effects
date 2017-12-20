import { Injector, InjectionToken } from '@angular/core';
import { EffectsSubscription } from './effects-subscription';
export var afterBootstrapEffects = new InjectionToken('ngrx:effects: Bootstrap Effects');
export function runAfterBootstrapEffects(injector, subscription) {
    return function () {
        var effectInstances = injector.get(afterBootstrapEffects, false);
        if (effectInstances) {
            subscription.addEffects(effectInstances);
        }
    };
}
//# sourceMappingURL=bootstrap-listener.js.map