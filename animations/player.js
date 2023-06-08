var A = Object.defineProperty;
var j = (s, t, e) => t in s ? A(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var h = (s, t, e) => (j(s, typeof t != "symbol" ? t + "" : t, e), e);
import { Stage as E, Player as Z } from "@motion-canvas/core";
const R = `.initial{display:none}.state-initial .initial{display:block}.loading{display:none}.state-loading .loading{display:block}.ready{display:none}.state-ready .ready{display:block}.error{display:none}.state-error .error{display:block}:host{position:relative;display:block}.overlay{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;align-items:center;justify-content:center;opacity:0;background-color:#0000008a;transition:opacity .1s}.overlay.state-ready:not(.auto){cursor:pointer}.overlay.playing:not(.hover):hover{cursor:none}.overlay.hover,.overlay.state-ready:focus-within,.overlay.state-ready:not(.playing){opacity:1}.overlay.hover .button,.overlay.state-ready:focus-within .button,.overlay.state-ready:not(.playing) .button{scale:1;transition:scale .1s ease-out}.overlay.state-loading,.overlay.state-error{opacity:1;transition:opacity 1s}.overlay.state-ready.auto{opacity:0}.button{width:50%;max-width:96px;aspect-ratio:1;scale:.5;transition:scale .1s ease-in,opacity .1s;background-color:transparent;border:none;background-size:100% 100%;background-repeat:no-repeat;opacity:.54;cursor:inherit;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDE0LjV2LTlsNiA0LjUtNiA0LjV6Ii8+PC9zdmc+)}.playing .button{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIGZpbGw9IiNmZmZmZmYiPjxnPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPjwvZz48Zz48Zy8+PHBhdGggZD0iTTEyLDJDNi40OCwyLDIsNi40OCwyLDEyczQuNDgsMTAsMTAsMTBzMTAtNC40OCwxMC0xMFMxNy41MiwyLDEyLDJ6IE0xMSwxNkg5VjhoMlYxNnogTTE1LDE2aC0yVjhoMlYxNnoiLz48L2c+PC9zdmc+)}.button:focus,.overlay:hover .button{opacity:.87}.auto .button{display:none}.canvas{width:100%;display:block;opacity:0;transition:opacity .1s}.canvas.state-ready{opacity:1}.message{font-family:JetBrains Mono,sans-serif;text-align:center;font-size:20px;padding:8px 16px;margin:16px;border-radius:4px;color:#fff9;background-color:#000000de}.loader{width:50%;max-width:96px;display:none;rotate:-90deg;animation:stroke 2s cubic-bezier(.5,0,.5,1) infinite,rotate 2s linear infinite}@keyframes stroke{0%{stroke-dasharray:5.6548667765px 50.8938009883px;stroke-dashoffset:2.8274333882px}50%{stroke-dasharray:50.8938009883px 5.6548667765px;stroke-dashoffset:-2.8274333882px}to{stroke-dasharray:5.6548667765px 50.8938009883px;stroke-dashoffset:-53.7212343766px}}@keyframes rotate{0%{rotate:-110deg}to{rotate:250deg}}
`, z = `<div class="overlay">
  <button title="Play / Pause" class="button ready" tabindex="0"></button>
  <div class="message error">
    An error occurred while loading the animation.
  </div>
  <svg
    class="loader loading"
    viewBox="0 0 24 24"
    stroke="#ffffff"
    stroke-width="2"
    fill="transparent"
  >
    <circle cx="12" cy="12" r="9" />
  </svg>
</div>
`, D = [];
function B() {
  const s = D.at(-1);
  if (!s)
    throw new Error("The scene is not available in the current context.");
  return s;
}
function H() {
  var s;
  return ((s = D.at(-1)) == null ? void 0 : s.logger) ?? console;
}
class N extends Error {
  constructor(t, e) {
    super(t), this.remarks = e;
  }
}
const G = [];
function v() {
  const s = G.at(-1);
  if (!s)
    throw new N("The thread is not available in the current context.", `<p><code>useThread()</code> can only be called from within generator functions.
      It&#39;s not available during rendering.</p>
`);
  return s;
}
function q(s) {
  return {
    message: s.message,
    stack: s.stack,
    remarks: s.remarks
  };
}
const W = 180 / Math.PI, O = Math.PI / 180, J = [];
function Q() {
  const s = J.at(-1);
  if (!s)
    throw new Error("The playback is not available in the current context.");
  return s;
}
function w(s, ...t) {
  const e = { [s.name]: s }, i = Object.getOwnPropertyDescriptor(e, s.name);
  if (i)
    for (let r = t.length - 1; r >= 0; r--)
      t[r](e, s.name, i);
}
function x(s) {
  return function(t, e, i) {
    i.value.prototype.name = s ?? e, i.value.prototype.threadable = !0;
  };
}
function M(s, t) {
  const e = Object.getPrototypeOf(s);
  e.threadable || (e.threadable = !0, e.name = typeof t == "string" ? t : Y(t));
}
function Y(s) {
  return Object.getPrototypeOf(s).name ?? null;
}
class U {
  constructor() {
    this.subscribable = new $(this), this.subscribers = /* @__PURE__ */ new Set();
  }
  /**
   * {@inheritDoc Subscribable.subscribe}
   */
  subscribe(t) {
    return this.subscribers.add(t), () => this.unsubscribe(t);
  }
  /**
   * {@inheritDoc Subscribable.unsubscribe}
   */
  unsubscribe(t) {
    this.subscribers.delete(t);
  }
  /**
   * Unsubscribe all subscribers from the event.
   */
  clear() {
    this.subscribers.clear();
  }
  notifySubscribers(t) {
    return [...this.subscribers].map((e) => e(t));
  }
}
class $ {
  constructor(t) {
    this.dispatcher = t;
  }
  /**
   * Subscribe to the event.
   *
   * @param handler - The handler to invoke when the event occurs.
   *
   * @returns A callback function that cancels the subscription.
   */
  subscribe(t) {
    return this.dispatcher.subscribe(t);
  }
  /**
   * Unsubscribe from the event.
   *
   * @param handler - The handler to unsubscribe.
   */
  unsubscribe(t) {
    this.dispatcher.unsubscribe(t);
  }
}
class X extends U {
  constructor() {
    super(...arguments), this.value = !1;
  }
  /**
   * Notify all current and future subscribers.
   */
  raise() {
    this.value || (this.value = !0, this.notifySubscribers());
  }
  /**
   * Stop notifying future subscribers.
   */
  reset() {
    this.value = !1;
  }
  /**
   * Are subscribers being notified?
   */
  isRaised() {
    return this.value;
  }
  subscribe(t) {
    const e = super.subscribe(t);
    return this.value && t(), e;
  }
}
function K(s) {
  const t = B(), e = v();
  return t.timeEvents.register(s, e.time());
}
function b(s, t, e) {
  return s + (t - s) * e;
}
function F(s, t, e) {
  return e < s ? s : e > t ? t : e;
}
function V(s, t, e) {
  let i = t;
  e > 1 ? e = 1 / e : i = !i;
  const r = i ? Math.acos(F(-1, 1, 1 - s)) : Math.asin(s), n = b(r, b(0, Math.PI / 2, s), e);
  let o = Math.sin(n), l = 1 - Math.cos(n);
  return t && ([o, l] = [l, o]), new a(o, l);
}
function _(s, t = 0, e = 1) {
  return s = s < 0.5 ? 4 * s * s * s : 1 - Math.pow(-2 * s + 2, 3) / 2, b(t, e, s);
}
w(C, x());
function* C(s, t, e) {
  const i = v(), r = i.time(), n = i.time() + s;
  for (t(0, 0); n > i.fixed; ) {
    const o = i.fixed - r, l = o / s;
    o > 0 && t(l, o), yield;
  }
  i.time(n), t(1, s), e == null || e(1, s);
}
w(tt, x());
function* tt(s, t) {
  yield* k(K(s)), t && (yield* t);
}
w(k, x());
function* k(s = 0, t) {
  const e = v(), i = Q().framesToSeconds(1), r = e.time() + s;
  for (; r - i > e.fixed; )
    yield;
  e.time(r), t && (yield* t);
}
function I(s, t) {
  let e;
  return typeof s == "string" ? (e = t(), M(e, s)) : (e = s(), M(e, e)), e;
}
class c {
  static collectPromise(t, e = null) {
    const i = {
      promise: t,
      value: e,
      stack: new Error().stack
    }, r = this.collectionStack.at(-1);
    return r && (i.owner = r.owner), t.then((n) => {
      i.value = n, r == null || r.markDirty();
    }), this.promises.push(i), i;
  }
  static hasPromises() {
    return this.promises.length > 0;
  }
  static async consumePromises() {
    const t = [...this.promises];
    return await Promise.all(t.map((e) => e.promise)), this.promises = this.promises.filter((e) => !t.includes(e)), t;
  }
  constructor(t) {
    this.owner = t, this.dependencies = /* @__PURE__ */ new Set(), this.event = new X(), this.markDirty = () => this.event.raise(), this.invokable = this.invoke.bind(this), Object.defineProperty(this.invokable, "context", {
      value: this
    }), Object.defineProperty(this.invokable, "toPromise", {
      value: this.toPromise.bind(this)
    });
  }
  invoke() {
  }
  startCollecting() {
    if (c.collectionSet.has(this))
      throw new N("A circular dependency occurred between signals.", `This can happen when signals reference each other in a loop.
        Try using the attached stack trace to locate said loop.`);
    c.collectionSet.add(this), c.collectionStack.push(this);
  }
  finishCollecting() {
    if (c.collectionSet.delete(this), c.collectionStack.pop() !== this)
      throw new Error("collectStart/collectEnd was called out of order.");
  }
  clearDependencies() {
    this.dependencies.forEach((t) => t.unsubscribe(this.markDirty)), this.dependencies.clear();
  }
  collect() {
    const t = c.collectionStack.at(-1);
    t && (t.dependencies.add(this.event.subscribable), this.event.subscribe(t.markDirty));
  }
  dispose() {
    this.clearDependencies(), this.event.clear(), this.owner = null;
  }
  async toPromise() {
    do
      await c.consumePromises(), this.invokable();
    while (c.hasPromises());
    return this.invokable;
  }
}
c.collectionSet = /* @__PURE__ */ new Set();
c.collectionStack = [];
c.promises = [];
function g(s) {
  return typeof s == "function";
}
function et(s, t) {
  return g(s) ? () => t(s()) : t(s);
}
function st(s) {
  return g(s) ? s() : s;
}
const S = Symbol.for("@motion-canvas/core/signals/default");
class P extends c {
  constructor(t, e, i = void 0, r = (o) => o, n = {}) {
    super(i), this.initial = t, this.interpolation = e, this.parser = r, Object.defineProperty(this.invokable, "reset", {
      value: this.reset.bind(this)
    }), Object.defineProperty(this.invokable, "save", {
      value: this.save.bind(this)
    }), Object.defineProperty(this.invokable, "isInitial", {
      value: this.isInitial.bind(this)
    }), this.initial !== void 0 && (this.current = this.initial, this.markDirty(), g(this.initial) || (this.last = this.parse(this.initial))), this.extensions = {
      getter: this.getter.bind(this),
      setter: this.setter.bind(this),
      tweener: this.tweener.bind(this),
      ...n
    };
  }
  toSignal() {
    return this.invokable;
  }
  parse(t) {
    return this.parser(t);
  }
  set(t) {
    return this.extensions.setter(t), this.owner;
  }
  setter(t) {
    return t === S && (t = this.initial), this.current === t ? this.owner : (this.current = t, this.markDirty(), this.clearDependencies(), g(t) || (this.last = this.parse(t)), this.owner);
  }
  get() {
    return this.extensions.getter();
  }
  getter() {
    var t;
    if (this.event.isRaised() && g(this.current)) {
      this.clearDependencies(), this.startCollecting();
      try {
        this.last = this.parse(this.current());
      } catch (e) {
        H().error({
          ...q(e),
          inspect: (t = this.owner) == null ? void 0 : t.key
        });
      }
      this.finishCollecting();
    }
    return this.event.reset(), this.collect(), this.last;
  }
  invoke(t, e, i = _, r = this.interpolation) {
    return t === void 0 ? this.get() : e === void 0 ? this.set(t) : this.createQueue(i, r).to(t, e);
  }
  createQueue(t, e) {
    const i = this.get(), r = [], n = I("animation chain", function* () {
      for (; r.length > 0; )
        yield* r.shift();
    });
    return n.to = (o, l, u = t, d = e) => (t = u, e = d, r.push(this.tween(o, l, u, d)), n), n.back = (o, l = t, u = e) => (t = l, e = u, r.push(this.tween(i, o, t, e)), n), n.wait = (o) => (r.push(k(o)), n), n.run = (o) => (r.push(o), n), n.do = (o) => (r.push(I(function* () {
      o();
    })), n), n;
  }
  *tween(t, e, i, r) {
    t === S && (t = this.initial), yield* this.extensions.tweener(t, e, i, r), this.set(t);
  }
  *tweener(t, e, i, r) {
    const n = this.get();
    yield* C(e, (o) => {
      this.set(r(n, this.parse(st(t)), i(o)));
    });
  }
  dispose() {
    super.dispose(), this.initial = void 0, this.current = void 0, this.last = void 0;
  }
  /**
   * Reset the signal to its initial value (if one has been set).
   *
   * @example
   * ```ts
   * const signal = createSignal(7);
   *
   * signal.reset();
   * // same as:
   * signal(7);
   * ```
   */
  reset() {
    return this.initial !== void 0 && this.set(this.initial), this.owner;
  }
  /**
   * Compute the current value of the signal and immediately set it.
   *
   * @remarks
   * This method can be used to stop the signal from updating while keeping its
   * current value.
   *
   * @example
   * ```ts
   * signal.save();
   * // same as:
   * signal(signal());
   * ```
   */
  save() {
    return this.set(this.get());
  }
  /**
   * Check if the signal is currently using its initial value.
   *
   * @example
   * ```ts
   *
   * const signal = createSignal(0);
   * signal.isInitial(); // true
   *
   * signal(5);
   * signal.isInitial(); // false
   *
   * signal(DEFAULT);
   * signal.isInitial(); // true
   * ```
   */
  isInitial() {
    return this.collect(), this.current === this.initial;
  }
  /**
   * Get the raw value of this signal.
   *
   * @remarks
   * If the signal was provided with a factory function, the function itself
   * will be returned, without invoking it.
   *
   * This method can be used to create copies of signals.
   *
   * @example
   * ```ts
   * const a = createSignal(2);
   * const b = createSignal(() => a);
   * // b() == 2
   *
   * const bClone = createSignal(b.raw());
   * // bClone() == 2
   *
   * a(4);
   * // b() == 4
   * // bClone() == 4
   * ```
   */
  raw() {
    return this.current;
  }
}
class it extends P {
  constructor(t, e, i, r, n = void 0, o = {}) {
    var l;
    super(void 0, r, n, e, o), this.entries = t, this.signals = [], this.parser = e;
    for (const u of t) {
      let d, y;
      Array.isArray(u) ? ([d, y] = u, (l = y.context).owner ?? (l.owner = this)) : (d = u, y = new P(et(i, (f) => e(f)[u]), b, n ?? this.invokable).toSignal()), this.signals.push([d, y]), Object.defineProperty(this.invokable, d, { value: y });
    }
  }
  toSignal() {
    return this.invokable;
  }
  parse(t) {
    return this.parser(t);
  }
  getter() {
    return this.parse(Object.fromEntries(this.signals.map(([t, e]) => [t, e()])));
  }
  setter(t) {
    if (g(t))
      for (const [e, i] of this.signals)
        i(() => this.parser(t())[e]);
    else {
      const e = this.parse(t);
      for (const [i, r] of this.signals)
        r(e[i]);
    }
    return this.owner;
  }
  reset() {
    for (const [, t] of this.signals)
      t.reset();
    return this.owner;
  }
  save() {
    for (const [, t] of this.signals)
      t.save();
    return this.owner;
  }
}
var L;
(function(s) {
  s[s.Vertical = 1] = "Vertical", s[s.Horizontal = 2] = "Horizontal";
})(L || (L = {}));
var p;
(function(s) {
  s[s.Top = 4] = "Top", s[s.Bottom = 8] = "Bottom", s[s.Left = 16] = "Left", s[s.Right = 32] = "Right";
})(p || (p = {}));
var m;
(function(s) {
  s[s.Middle = 3] = "Middle", s[s.Top = 5] = "Top", s[s.Bottom = 9] = "Bottom", s[s.Left = 18] = "Left", s[s.Right = 34] = "Right", s[s.TopLeft = 20] = "TopLeft", s[s.TopRight = 36] = "TopRight", s[s.BottomLeft = 24] = "BottomLeft", s[s.BottomRight = 40] = "BottomRight";
})(m || (m = {}));
const rt = 1e-6;
class a {
  static createSignal(t, e = a.lerp, i) {
    return new it(["x", "y"], (r) => new a(r), t, e, i).toSignal();
  }
  static lerp(t, e, i) {
    let r, n;
    return typeof i == "number" ? r = n = i : (r = i.x, n = i.y), new a(b(t.x, e.x, r), b(t.y, e.y, n));
  }
  static arcLerp(t, e, i, r = !1, n) {
    return n ?? (n = t.sub(e).ctg), a.lerp(t, e, V(i, r, n));
  }
  static createArcLerp(t, e) {
    return (i, r, n) => a.arcLerp(i, r, n, t, e);
  }
  static fromOrigin(t) {
    const e = new a();
    return t === m.Middle || (t & p.Left ? e.x = -1 : t & p.Right && (e.x = 1), t & p.Top ? e.y = -1 : t & p.Bottom && (e.y = 1)), e;
  }
  static fromScalar(t) {
    return new a(t, t);
  }
  static fromRadians(t) {
    return new a(Math.cos(t), Math.sin(t));
  }
  static fromDegrees(t) {
    return a.fromRadians(t * O);
  }
  /**
   * Return the angle in radians between the vector described by x and y and the
   * positive x-axis.
   *
   * @param x - The x component of the vector.
   * @param y - The y component of the vector.
   */
  static radians(t, e) {
    return Math.atan2(e, t);
  }
  /**
   * Return the angle in degrees between the vector described by x and y and the
   * positive x-axis.
   *
   * @param x - The x component of the vector.
   * @param y - The y component of the vector.
   *
   * @remarks
   * The returned angle will be between -180 and 180 degrees.
   */
  static degrees(t, e) {
    return a.radians(t, e) * W;
  }
  static magnitude(t, e) {
    return Math.sqrt(t * t + e * e);
  }
  static squaredMagnitude(t, e) {
    return t * t + e * e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  get magnitude() {
    return a.magnitude(this.x, this.y);
  }
  get squaredMagnitude() {
    return a.squaredMagnitude(this.x, this.y);
  }
  get normalized() {
    return this.scale(1 / a.magnitude(this.x, this.y));
  }
  get safe() {
    return new a(isNaN(this.x) ? 0 : this.x, isNaN(this.y) ? 0 : this.y);
  }
  get flipped() {
    return new a(-this.x, -this.y);
  }
  get floored() {
    return new a(Math.floor(this.x), Math.floor(this.y));
  }
  get perpendicular() {
    return new a(this.y, -this.x);
  }
  /**
   * Return the angle in radians between the vector and the positive x-axis.
   */
  get radians() {
    return a.radians(this.x, this.y);
  }
  /**
   * Return the angle in degrees between the vector and the positive x-axis.
   *
   * @remarks
   * The returned angle will be between -180 and 180 degrees.
   */
  get degrees() {
    return a.degrees(this.x, this.y);
  }
  get ctg() {
    return this.x / this.y;
  }
  constructor(t, e) {
    if (this.x = 0, this.y = 0, t != null) {
      if (typeof t != "object") {
        this.x = t, this.y = e ?? t;
        return;
      }
      if (Array.isArray(t)) {
        this.x = t[0], this.y = t[1];
        return;
      }
      if ("width" in t) {
        this.x = t.width, this.y = t.height;
        return;
      }
      this.x = t.x, this.y = t.y;
    }
  }
  lerp(t, e) {
    return a.lerp(this, t, e);
  }
  getOriginOffset(t) {
    const e = a.fromOrigin(t);
    return e.x *= this.x / 2, e.y *= this.y / 2, e;
  }
  scale(t) {
    return new a(this.x * t, this.y * t);
  }
  transformAsPoint(t) {
    return new a(this.x * t.m11 + this.y * t.m21 + t.m41, this.x * t.m12 + this.y * t.m22 + t.m42);
  }
  transform(t) {
    return new a(this.x * t.m11 + this.y * t.m21, this.x * t.m12 + this.y * t.m22);
  }
  mul(t) {
    const e = new a(t);
    return new a(this.x * e.x, this.y * e.y);
  }
  div(t) {
    const e = new a(t);
    return new a(this.x / e.x, this.y / e.y);
  }
  add(t) {
    const e = new a(t);
    return new a(this.x + e.x, this.y + e.y);
  }
  sub(t) {
    const e = new a(t);
    return new a(this.x - e.x, this.y - e.y);
  }
  dot(t) {
    const e = new a(t);
    return this.x * e.x + this.y * e.y;
  }
  mod(t) {
    const e = new a(t);
    return new a(this.x % e.x, this.y % e.y);
  }
  addX(t) {
    return new a(this.x + t, this.y);
  }
  addY(t) {
    return new a(this.x, this.y + t);
  }
  toSymbol() {
    return a.symbol;
  }
  toString() {
    return `Vector2(${this.x}, ${this.y})`;
  }
  serialize() {
    return { x: this.x, y: this.y };
  }
  /**
   * Check if two vectors are exactly equal to each other.
   *
   * @remarks
   * If you need to compensate for floating point inaccuracies, use the
   * {@link equals} method, instead.
   *
   * @param other - The vector to compare.
   */
  exactlyEquals(t) {
    return this.x === t.x && this.y === t.y;
  }
  /**
   * Check if two vectors are equal to each other.
   *
   * @remarks
   * This method allows passing an allowed error margin when comparing vectors
   * to compensate for floating point inaccuracies. To check if two vectors are
   * exactly equal, use the {@link exactlyEquals} method, instead.
   *
   * @param other - The vector to compare.
   * @param threshold - The allowed error threshold when comparing the vectors.
   */
  equals(t, e = rt) {
    return Math.abs(this.x - t.x) <= e + Number.EPSILON && Math.abs(this.y - t.y) <= e + Number.EPSILON;
  }
}
a.symbol = Symbol.for("@motion-canvas/core/types/Vector2");
a.zero = new a();
a.one = new a(1, 1);
a.right = new a(1, 0);
a.left = new a(-1, 0);
a.up = new a(0, 1);
a.down = new a(0, -1);
const at = `<style>${R}</style>${z}`, T = "motion-canvas-player";
class nt extends HTMLElement {
  constructor() {
    super();
    h(this, "root");
    h(this, "canvas");
    h(this, "overlay");
    h(this, "button");
    h(this, "state", "initial");
    h(this, "project", null);
    h(this, "player", null);
    h(this, "defaultSettings");
    h(this, "abortController", null);
    h(this, "mouseMoveId", null);
    h(this, "finished", !1);
    h(this, "playing", !1);
    h(this, "connected", !1);
    h(this, "stage", new E());
    h(this, "handleMouseMove", () => {
      this.mouseMoveId && clearTimeout(this.mouseMoveId), this.hover && !this.playing && this.setPlaying(!0), this.mouseMoveId = window.setTimeout(() => {
        this.mouseMoveId = null, this.updateClass();
      }, 2e3), this.updateClass();
    });
    h(this, "handleMouseLeave", () => {
      this.hover && this.setPlaying(!1), this.mouseMoveId && (clearTimeout(this.mouseMoveId), this.mouseMoveId = null, this.updateClass());
    });
    h(this, "handleMouseDown", (e) => {
      e.preventDefault();
    });
    h(this, "handleClick", () => {
      this.auto || (this.handleMouseMove(), this.setPlaying(!this.playing), this.button.animate(
        [
          { scale: "0.9" },
          {
            scale: "1",
            easing: "ease-out"
          }
        ],
        { duration: 200 }
      ));
    });
    h(this, "render", async () => {
      this.player && await this.stage.render(
        this.player.playback.currentScene,
        this.player.playback.previousScene
      );
    });
    this.root = this.attachShadow({ mode: "open" }), this.root.innerHTML = at, this.overlay = this.root.querySelector(".overlay"), this.button = this.root.querySelector(".button"), this.canvas = this.stage.finalBuffer, this.canvas.classList.add("canvas"), this.root.prepend(this.canvas), this.overlay.addEventListener("click", this.handleClick), this.overlay.addEventListener("mousemove", this.handleMouseMove), this.overlay.addEventListener("mouseleave", this.handleMouseLeave), this.button.addEventListener("mousedown", this.handleMouseDown), this.setState(
      "initial"
      /* Initial */
    );
  }
  static get observedAttributes() {
    return ["src", "quality", "width", "height", "auto", "variables"];
  }
  get auto() {
    return !!this.getAttribute("auto");
  }
  get hover() {
    return this.getAttribute("auto") === "hover";
  }
  get quality() {
    const e = this.getAttribute("quality");
    return e ? parseFloat(e) : this.defaultSettings.resolutionScale;
  }
  get width() {
    const e = this.getAttribute("width");
    return e ? parseFloat(e) : this.defaultSettings.size.width;
  }
  get height() {
    const e = this.getAttribute("height");
    return e ? parseFloat(e) : this.defaultSettings.size.height;
  }
  get variables() {
    try {
      const e = this.getAttribute("variables");
      return e ? JSON.parse(e) : {};
    } catch {
      return this.project.logger.warn("Project variables could not be parsed."), {};
    }
  }
  setState(e) {
    this.state = e, this.setPlaying(this.playing);
  }
  setPlaying(e) {
    var i, r;
    this.state === "ready" && (e || this.auto && !this.hover) ? ((i = this.player) == null || i.togglePlayback(!0), this.playing = !0) : ((r = this.player) == null || r.togglePlayback(!1), this.playing = !1), this.updateClass();
  }
  updateClass() {
    this.overlay.className = `overlay state-${this.state}`, this.canvas.className = `canvas state-${this.state}`, this.overlay.classList.toggle("playing", this.playing), this.overlay.classList.toggle("auto", this.auto), this.overlay.classList.toggle("hover", this.mouseMoveId !== null), this.connected && (this.mouseMoveId !== null || !this.playing ? this.dataset.overlay = "" : delete this.dataset.overlay);
  }
  async updateSource(e) {
    var n, o, l, u;
    this.setState(
      "initial"
      /* Initial */
    ), (n = this.abortController) == null || n.abort(), this.abortController = new AbortController();
    let i;
    try {
      const d = import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        e
      ), y = new Promise((f) => setTimeout(f, 200));
      await Promise.any([y, d]), this.setState(
        "loading"
        /* Loading */
      ), i = (await d).default;
    } catch (d) {
      console.error(d), this.setState(
        "error"
        /* Error */
      );
      return;
    }
    this.defaultSettings = i.meta.getFullRenderingSettings();
    const r = new Z(i);
    r.setVariables(this.variables), this.finished = !1, (o = this.player) == null || o.onRender.unsubscribe(this.render), (l = this.player) == null || l.togglePlayback(!1), (u = this.player) == null || u.deactivate(), this.project = i, this.player = r, this.updateSettings(), this.player.onRender.subscribe(this.render), this.player.togglePlayback(this.playing), this.setState(
      "ready"
      /* Ready */
    );
  }
  attributeChangedCallback(e, i, r) {
    var n;
    switch (e) {
      case "auto":
        this.setPlaying(this.playing);
        break;
      case "src":
        this.updateSource(r);
        break;
      case "quality":
      case "width":
      case "height":
        this.updateSettings();
        break;
      case "variables":
        (n = this.player) == null || n.setVariables(this.variables);
    }
  }
  disconnectedCallback() {
    var e, i;
    this.connected = !1, (e = this.player) == null || e.deactivate(), (i = this.player) == null || i.onRender.unsubscribe(this.render);
  }
  connectedCallback() {
    var e, i;
    this.connected = !0, (e = this.player) == null || e.activate(), (i = this.player) == null || i.onRender.subscribe(this.render);
  }
  updateSettings() {
    const e = {
      ...this.defaultSettings,
      size: new a(this.width, this.height),
      resolutionScale: this.quality
    };
    this.stage.configure(e), this.player.configure(e);
  }
}
customElements.get(T) || customElements.define(T, nt);
