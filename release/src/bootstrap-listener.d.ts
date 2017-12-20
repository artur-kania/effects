import { Injector, InjectionToken } from '@angular/core';
import { EffectsSubscription } from './effects-subscription';
export declare const afterBootstrapEffects: InjectionToken<any>;
export declare function runAfterBootstrapEffects(injector: Injector, subscription: EffectsSubscription): () => void;
