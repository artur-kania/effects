var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { InjectionToken, Inject, SkipSelf, Optional, Injectable, OnDestroy } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { merge } from 'rxjs/observable/merge';
import { mergeEffects } from './effects';
export var effects = new InjectionToken('ngrx/effects: Effects');
var EffectsSubscription = /** @class */ (function (_super) {
    __extends(EffectsSubscription, _super);
    function EffectsSubscription(store, parent, effectInstances) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.parent = parent;
        if (Boolean(parent)) {
            parent.add(_this);
        }
        if (Boolean(effectInstances)) {
            _this.addEffects(effectInstances);
        }
        return _this;
    }
    EffectsSubscription.prototype.addEffects = function (effectInstances) {
        var sources = effectInstances.map(mergeEffects);
        var merged = merge.apply(void 0, sources);
        this.add(merged.subscribe(this.store));
    };
    EffectsSubscription.prototype.ngOnDestroy = function () {
        if (!this.closed) {
            this.unsubscribe();
        }
    };
    EffectsSubscription.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    EffectsSubscription.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [Store,] },] },
        { type: EffectsSubscription, decorators: [{ type: Optional }, { type: SkipSelf },] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [effects,] },] },
    ]; };
    return EffectsSubscription;
}(Subscription));
export { EffectsSubscription };
//# sourceMappingURL=effects-subscription.js.map