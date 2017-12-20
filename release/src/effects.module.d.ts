import { Type, InjectionToken } from '@angular/core';
import { EffectsSubscription } from './effects-subscription';
export declare class EffectsModule {
    private effectsSubscription;
    static run(type: Type<any>): {
        ngModule: typeof EffectsModule;
        providers: (Type<any> | {
            provide: InjectionToken<any>;
            useExisting: Type<any>;
            multi: boolean;
        })[];
    };
    static runAfterBootstrap(type: Type<any>): {
        ngModule: typeof EffectsModule;
        providers: (Type<any> | {
            provide: InjectionToken<any>;
            useExisting: Type<any>;
            multi: boolean;
        })[];
    };
    constructor(effectsSubscription: EffectsSubscription);
}
