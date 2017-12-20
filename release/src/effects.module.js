import { NgModule, Injector, Type, APP_BOOTSTRAP_LISTENER, InjectionToken } from '@angular/core';
import { Actions } from './actions';
import { EffectsSubscription, effects } from './effects-subscription';
import { runAfterBootstrapEffects, afterBootstrapEffects } from './bootstrap-listener';
var ɵ0 = runAfterBootstrapEffects;
var EffectsModule = /** @class */ (function () {
    function EffectsModule(effectsSubscription) {
        this.effectsSubscription = effectsSubscription;
    }
    EffectsModule.run = function (type) {
        return {
            ngModule: EffectsModule,
            providers: [
                EffectsSubscription,
                type,
                { provide: effects, useExisting: type, multi: true }
            ]
        };
    };
    EffectsModule.runAfterBootstrap = function (type) {
        return {
            ngModule: EffectsModule,
            providers: [
                type,
                { provide: afterBootstrapEffects, useExisting: type, multi: true }
            ]
        };
    };
    EffectsModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        Actions,
                        EffectsSubscription,
                        {
                            provide: APP_BOOTSTRAP_LISTENER,
                            multi: true,
                            deps: [Injector, EffectsSubscription],
                            useFactory: ɵ0
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    EffectsModule.ctorParameters = function () { return [
        { type: EffectsSubscription, },
    ]; };
    return EffectsModule;
}());
export { EffectsModule };
export { ɵ0 };
//# sourceMappingURL=effects.module.js.map