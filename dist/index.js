var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// node_modules/.pnpm/compostate@0.4.0/node_modules/compostate/dist/esm/production/index.js
var fe;
function Fe(e) {
  fe = e;
}
var at = 0;
function Z(e, t) {
  return { isSubscriber: e, tag: t, id: at++, alive: true };
}
function Ne(e, t) {
  if (!e.links)
    e.links = t;
  else {
    let n = e.links;
    n instanceof Set || (n = /* @__PURE__ */ new Set([n]), e.links = n), n.add(t);
  }
}
function $e(e, t) {
  e.alive && t.alive && (Ne(e, t), Ne(t, e));
}
function pe(e, t) {
  t.delete(e), t.add(e);
}
function _(e) {
  fe(e);
}
function We(e, t) {
  if (e.links)
    if (e.links instanceof Set)
      for (let n of e.links.keys())
        pe(n, t);
    else
      pe(e.links, t);
}
function _e(e) {
  if (e.links)
    if (e.links instanceof Set)
      for (let t of e.links.keys())
        fe(t);
    else
      fe(e.links);
}
function Ke(e) {
  if (e.links) {
    if (e.links instanceof Set) {
      for (let t of e.links.keys())
        t.links instanceof Set ? t.links.delete(e) : t.links = void 0;
      e.links.clear();
    }
    e.links = void 0;
  }
}
function z(e) {
  e.alive && (e.alive = false, e.isSubscriber && Ke(e), e.links = void 0);
}
function W(e) {
  try {
    return { isSuccess: true, value: e() };
  } catch (t) {
    return { isSuccess: false, value: t };
  }
}
function Te(e, t) {
  try {
    return { isSuccess: true, value: e(t) };
  } catch (n) {
    return { isSuccess: false, value: n };
  }
}
function De(e, t, n) {
  try {
    return { isSuccess: true, value: e(t, n) };
  } catch (r) {
    return { isSuccess: false, value: r };
  }
}
function D(e, t) {
  try {
    return { isSuccess: true, value: e(...t) };
  } catch (n) {
    return { isSuccess: false, value: n };
  }
}
function R(e) {
  if (e.isSuccess)
    return e.value;
  throw e.value;
}
var { is: j, assign: Ee } = Object;
var ht = 1;
var qe = 2;
var Ye = 4;
var He = 8;
var a;
var k;
var v;
var b;
var m;
var p;
function d(e) {
  return p == null || p.add(e), e;
}
function At(e) {
  for (let t of e)
    t();
}
function U(e) {
  let t = /* @__PURE__ */ new Set(), n = p;
  p = t;
  let r = W(e);
  p = n, R(r);
  let o = true;
  return d(() => {
    if (o && (o = false, t.size)) {
      let i = a;
      a = void 0;
      let c = Te(At, t);
      a = i, R(c);
    }
  });
}
function Ct(e, t) {
  for (let n of e)
    n(t);
}
function te(e, t) {
  if (e) {
    let { calls: n, parent: r } = e;
    if (n != null && n.size) {
      let o = a;
      a = void 0;
      let i = De(Ct, n.keys(), t);
      a = o, i.isSuccess || (te(r, t), te(r, i.value));
    } else
      te(r, t);
  } else
    throw t;
}
function T() {
  return Z(false, ht);
}
function y(e) {
  z(e);
}
function K(e) {
  p && p.add(() => z(e));
}
function x(e) {
  $e(e, a);
}
function Lt(e) {
  for (let t of e)
    t.alive && (t.isSubscriber ? _(t) : _e(t));
}
function we(e) {
  k = e;
  let t = Te(Lt, e);
  k = void 0, R(t);
}
function l(e) {
  if (e.alive)
    if (k)
      We(e, k);
    else {
      let t = /* @__PURE__ */ new Set();
      We(e, t), we(t);
    }
}
function L(e, ...t) {
  if (k)
    e(...t);
  else {
    let n = /* @__PURE__ */ new Set();
    k = n;
    let r = D(e, t);
    k = void 0, R(r), we(n);
  }
}
function Ve(e) {
  e.cleanup && (L(e.cleanup), e.cleanup = void 0), e.context = void 0, e.errorBoundary = void 0;
}
function N(e) {
  let t = Ee(Z(true, Ye), { callback: e, context: m, errorBoundary: v });
  return b ? b.push(t) : _(t), d(() => {
    t.alive && (Ve(t), t.callback = void 0, z(t));
  });
}
function Qe(e, t = j) {
  let n = T();
  return K(n), [() => (a && x(n), e), (r) => {
    t(r, e) || (e = r, l(n));
  }];
}
function Mt(e, t) {
  var n;
  (n = e.cleanup) == null || n.call(e), e.cleanup = U(() => {
    e.current = t(e.current);
  });
}
function jt(e) {
  let { process: t } = e;
  t && L(Mt, e, t);
}
function Ut(e, t, n) {
  var s, f;
  let r = "current" in e, o = t(), i = e.current, c = (s = e.isEqual) != null ? s : j;
  (r && !c(o, i) || !r) && ((f = e.cleanup) == null || f.call(e), e.cleanup = U(() => {
    e.current = o, n(o, i);
  }));
}
function Nt(e) {
  let { source: t, listen: n } = e;
  t && n && L(Ut, e, t, n);
}
function Ft(e, t) {
  var n;
  (n = e.cleanup) == null || n.call(e), e.cleanup = U(t);
}
function $t(e) {
  let { callback: t } = e;
  t && L(Ft, e, t);
}
function _t(e) {
  switch (e.tag) {
    case qe:
      jt(e);
      break;
    case He:
      Nt(e);
      break;
    case Ye:
      $t(e);
      break;
    default:
      break;
  }
}
function zt(e) {
  Ke(e);
  let t = m, n = a, r = b, o = v;
  v = e.errorBoundary, b = void 0, a = e, m = e.context;
  let i = Te(_t, e);
  m = t, a = n, b = r, v = o, i.isSuccess || te(e.errorBoundary, i.value);
}
Fe(zt);
var [Ht, Ze] = Qe(false);
var et = Symbol("COMPOSTATE_READONLY");
var P = Symbol("COMPOSTATE_TRACKABLE");
function E(e, t) {
  return t[P] = e, t;
}
var { is: Ie } = Object;
var F = Symbol("COMPOSTATE_REF");
var { is: nt } = Object;
function B() {
  return /* @__PURE__ */ new Map();
}
function H(e) {
  for (let t of e.values())
    y(t);
}
function rt(e, t) {
  let n = e.get(t);
  if (n)
    return n;
  let r = T();
  return e.set(t, r), r;
}
function V(e, t, n) {
  let r = rt(e, t);
  l(r), n && y(r);
}
function M(e, t) {
  x(rt(e, t));
}
function xe(e, t) {
  if (e.size) {
    for (let n of e.values())
      l(n), t && y(n);
    t && e.clear();
  }
}
var re = class {
  constructor(t) {
    this.atom = T();
    this.source = t, d(() => {
      this.collection && H(this.collection), y(this.atom);
    }), E(this.atom, this);
  }
  clear() {
    this.source.clear(), this.collection && xe(this.collection, true), l(this.atom);
  }
  delete(t) {
    let n = this.source.delete(t);
    return n && (this.collection && V(this.collection, t, true), l(this.atom)), n;
  }
  forEach(t, n) {
    this.forEach(t, n);
  }
  get size() {
    return this.source.size;
  }
  entries() {
    return this.source.entries();
  }
  keys() {
    return this.source.keys();
  }
  values() {
    return this.source.values();
  }
  [Symbol.iterator]() {
    return this.source[Symbol.iterator]();
  }
  get [Symbol.toStringTag]() {
    return this.source[Symbol.toStringTag];
  }
  get(t) {
    return a && (this.collection || (this.collection = B()), M(this.collection, t)), this.source.get(t);
  }
  set(t, n) {
    let r = this.source.get(t);
    return Object.is(r, n) || (this.source.set(t, n), this.collection && V(this.collection, t), l(this.atom)), this;
  }
  has(t) {
    return a && (this.collection || (this.collection = B()), M(this.collection, t)), this.source.has(t);
  }
};
var oe = class {
  constructor(t) {
    this.atom = T();
    this.source = t, d(() => {
      this.collection && H(this.collection), y(this.atom);
    }), E(this.atom, this);
  }
  clear() {
    this.source.clear(), this.collection && xe(this.collection, true), l(this.atom);
  }
  delete(t) {
    let n = this.source.delete(t);
    return n && (this.collection && V(this.collection, t, true), l(this.atom)), n;
  }
  forEach(t, n) {
    this.forEach(t, n);
  }
  get size() {
    return this.source.size;
  }
  entries() {
    return this.source.entries();
  }
  keys() {
    return this.source.keys();
  }
  values() {
    return this.source.values();
  }
  [Symbol.iterator]() {
    return this.source[Symbol.iterator]();
  }
  get [Symbol.toStringTag]() {
    return this.source[Symbol.toStringTag];
  }
  add(t) {
    let n = !this.source.has(t);
    return this.source.add(t), n && (this.collection && V(this.collection, t), l(this.atom)), this;
  }
  has(t) {
    return a && (this.collection || (this.collection = B()), M(this.collection, t)), this.source.has(t);
  }
};
function ie() {
  return /* @__PURE__ */ new WeakMap();
}
function ot(e, t) {
  let n = e.get(t);
  if (n)
    return n;
  let r = T();
  return e.set(t, r), r;
}
function Q(e, t, n) {
  let r = ot(e, t);
  l(r), n && y(r);
}
function ce(e, t) {
  x(ot(e, t));
}
var se = class {
  constructor(t) {
    this.atom = T();
    this.source = t, d(() => {
      y(this.atom);
    }), E(this.atom, this);
  }
  delete(t) {
    let n = this.source.delete(t);
    return n && (this.collection && Q(this.collection, t, true), l(this.atom)), n;
  }
  get [Symbol.toStringTag]() {
    return this.source[Symbol.toStringTag];
  }
  get(t) {
    return a && (this.collection || (this.collection = ie()), ce(this.collection, t)), this.source.get(t);
  }
  set(t, n) {
    let r = this.source.get(t);
    return Object.is(r, n) || (this.source.set(t, n), this.collection && Q(this.collection, t), l(this.atom)), this;
  }
  has(t) {
    return a && (this.collection || (this.collection = ie()), ce(this.collection, t)), this.source.has(t);
  }
};
var ae = class {
  constructor(t) {
    this.atom = T();
    this.source = t, d(() => {
      y(this.atom);
    }), E(this.atom, this);
  }
  delete(t) {
    let n = this.source.delete(t);
    return n && (this.collection && Q(this.collection, t, true), l(this.atom)), n;
  }
  get [Symbol.toStringTag]() {
    return this.source[Symbol.toStringTag];
  }
  add(t) {
    let n = !this.source.has(t);
    return this.source.add(t), n && (this.collection && Q(this.collection, t), l(this.atom)), this;
  }
  has(t) {
    return a && (this.collection || (this.collection = ie()), ce(this.collection, t)), this.source.has(t);
  }
};

// node_modules/.pnpm/solid-js@1.4.3/node_modules/solid-js/dist/solid.js
var sharedConfig = {};
function setHydrateContext(context) {
  sharedConfig.context = context;
}
var equalFn = (a5, b5) => a5 === b5;
var $PROXY = Symbol("solid-proxy");
var $TRACK = Symbol("solid-track");
var $DEVCOMP = Symbol("solid-dev-component");
var signalOptions = {
  equals: equalFn
};
var ERROR = null;
var runEffects = runQueue;
var NOTPENDING = {};
var STALE = 1;
var PENDING = 2;
var UNOWNED = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var [transPending, setTransPending] = /* @__PURE__ */ createSignal(false);
var Owner = null;
var Transition = null;
var Scheduler = null;
var ExternalSourceFactory = null;
var Listener = null;
var Pending = null;
var Updates = null;
var Effects = null;
var ExecCount = 0;
function createSignal(value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const s = {
    value,
    observers: null,
    observerSlots: null,
    pending: NOTPENDING,
    comparator: options.equals || void 0
  };
  const setter = (value2) => {
    if (typeof value2 === "function") {
      if (Transition && Transition.running && Transition.sources.has(s))
        value2 = value2(s.pending !== NOTPENDING ? s.pending : s.tValue);
      else
        value2 = value2(s.pending !== NOTPENDING ? s.pending : s.value);
    }
    return writeSignal(s, value2);
  };
  return [readSignal.bind(s), setter];
}
function createComputed(fn, value, options) {
  const c = createComputation(fn, value, true, STALE);
  if (Scheduler && Transition && Transition.running)
    Updates.push(c);
  else
    updateComputation(c);
}
function createEffect(fn, value, options) {
  runEffects = runUserEffects;
  const c = createComputation(fn, value, false, STALE), s = SuspenseContext && lookup(Owner, SuspenseContext.id);
  if (s)
    c.suspense = s;
  c.user = true;
  Effects ? Effects.push(c) : updateComputation(c);
}
function createMemo(fn, value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const c = createComputation(fn, value, true, 0);
  c.pending = NOTPENDING;
  c.observers = null;
  c.observerSlots = null;
  c.comparator = options.equals || void 0;
  if (Scheduler && Transition && Transition.running) {
    c.tState = STALE;
    Updates.push(c);
  } else
    updateComputation(c);
  return readSignal.bind(c);
}
function batch(fn) {
  if (Pending)
    return fn();
  let result;
  const q = Pending = [];
  try {
    result = fn();
  } finally {
    Pending = null;
  }
  runUpdates(() => {
    for (let i = 0; i < q.length; i += 1) {
      const data = q[i];
      if (data.pending !== NOTPENDING) {
        const pending = data.pending;
        data.pending = NOTPENDING;
        writeSignal(data, pending);
      }
    }
  }, false);
  return result;
}
function untrack(fn) {
  let result, listener = Listener;
  Listener = null;
  result = fn();
  Listener = listener;
  return result;
}
function onCleanup(fn) {
  if (Owner === null)
    ;
  else if (Owner.cleanups === null)
    Owner.cleanups = [fn];
  else
    Owner.cleanups.push(fn);
  return fn;
}
function startTransition(fn) {
  if (Transition && Transition.running) {
    fn();
    return Transition.done;
  }
  const l2 = Listener;
  const o = Owner;
  return Promise.resolve().then(() => {
    Listener = l2;
    Owner = o;
    let t;
    if (Scheduler || SuspenseContext) {
      t = Transition || (Transition = {
        sources: /* @__PURE__ */ new Set(),
        effects: [],
        promises: /* @__PURE__ */ new Set(),
        disposed: /* @__PURE__ */ new Set(),
        queue: /* @__PURE__ */ new Set(),
        running: true
      });
      t.done || (t.done = new Promise((res) => t.resolve = res));
      t.running = true;
    }
    batch(fn);
    Listener = Owner = null;
    return t ? t.done : void 0;
  });
}
function createContext(defaultValue) {
  const id = Symbol("context");
  return {
    id,
    Provider: createProvider(id),
    defaultValue
  };
}
function children(fn) {
  const children2 = createMemo(fn);
  return createMemo(() => resolveChildren(children2()));
}
var SuspenseContext;
function readSignal() {
  const runningTransition = Transition && Transition.running;
  if (this.sources && (!runningTransition && this.state || runningTransition && this.tState)) {
    const updates = Updates;
    Updates = null;
    !runningTransition && this.state === STALE || runningTransition && this.tState === STALE ? updateComputation(this) : lookUpstream(this);
    Updates = updates;
  }
  if (Listener) {
    const sSlot = this.observers ? this.observers.length : 0;
    if (!Listener.sources) {
      Listener.sources = [this];
      Listener.sourceSlots = [sSlot];
    } else {
      Listener.sources.push(this);
      Listener.sourceSlots.push(sSlot);
    }
    if (!this.observers) {
      this.observers = [Listener];
      this.observerSlots = [Listener.sources.length - 1];
    } else {
      this.observers.push(Listener);
      this.observerSlots.push(Listener.sources.length - 1);
    }
  }
  if (runningTransition && Transition.sources.has(this))
    return this.tValue;
  return this.value;
}
function writeSignal(node, value, isComp) {
  if (Pending) {
    if (node.pending === NOTPENDING)
      Pending.push(node);
    node.pending = value;
    return value;
  }
  if (node.comparator) {
    if (Transition && Transition.running && Transition.sources.has(node)) {
      if (node.comparator(node.tValue, value))
        return value;
    } else if (node.comparator(node.value, value))
      return value;
  }
  let TransitionRunning = false;
  if (Transition) {
    TransitionRunning = Transition.running;
    if (TransitionRunning || !isComp && Transition.sources.has(node)) {
      Transition.sources.add(node);
      node.tValue = value;
    }
    if (!TransitionRunning)
      node.value = value;
  } else
    node.value = value;
  if (node.observers && node.observers.length) {
    runUpdates(() => {
      for (let i = 0; i < node.observers.length; i += 1) {
        const o = node.observers[i];
        if (TransitionRunning && Transition.disposed.has(o))
          continue;
        if (TransitionRunning && !o.tState || !TransitionRunning && !o.state) {
          if (o.pure)
            Updates.push(o);
          else
            Effects.push(o);
          if (o.observers)
            markDownstream(o);
        }
        if (TransitionRunning)
          o.tState = STALE;
        else
          o.state = STALE;
      }
      if (Updates.length > 1e6) {
        Updates = [];
        if (false)
          ;
        throw new Error();
      }
    }, false);
  }
  return value;
}
function updateComputation(node) {
  if (!node.fn)
    return;
  cleanNode(node);
  const owner = Owner, listener = Listener, time = ExecCount;
  Listener = Owner = node;
  runComputation(node, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value, time);
  if (Transition && !Transition.running && Transition.sources.has(node)) {
    queueMicrotask(() => {
      runUpdates(() => {
        Transition && (Transition.running = true);
        runComputation(node, node.tValue, time);
      }, false);
    });
  }
  Listener = listener;
  Owner = owner;
}
function runComputation(node, value, time) {
  let nextValue;
  try {
    nextValue = node.fn(value);
  } catch (err) {
    handleError(err);
  }
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.observers && node.observers.length) {
      writeSignal(node, nextValue, true);
    } else if (Transition && Transition.running && node.pure) {
      Transition.sources.add(node);
      node.tValue = nextValue;
    } else
      node.value = nextValue;
    node.updatedAt = time;
  }
}
function createComputation(fn, init, pure, state = STALE, options) {
  const c = {
    fn,
    state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner,
    context: null,
    pure
  };
  if (Transition && Transition.running) {
    c.state = 0;
    c.tState = state;
  }
  if (Owner === null)
    ;
  else if (Owner !== UNOWNED) {
    if (Transition && Transition.running && Owner.pure) {
      if (!Owner.tOwned)
        Owner.tOwned = [c];
      else
        Owner.tOwned.push(c);
    } else {
      if (!Owner.owned)
        Owner.owned = [c];
      else
        Owner.owned.push(c);
    }
  }
  if (ExternalSourceFactory) {
    const [track, trigger] = createSignal(void 0, {
      equals: false
    });
    const ordinary = ExternalSourceFactory(c.fn, trigger);
    onCleanup(() => ordinary.dispose());
    const triggerInTransition = () => startTransition(trigger).then(() => inTransition.dispose());
    const inTransition = ExternalSourceFactory(c.fn, triggerInTransition);
    c.fn = (x2) => {
      track();
      return Transition && Transition.running ? inTransition.track(x2) : ordinary.track(x2);
    };
  }
  return c;
}
function runTop(node) {
  const runningTransition = Transition && Transition.running;
  if (!runningTransition && node.state === 0 || runningTransition && node.tState === 0)
    return;
  if (!runningTransition && node.state === PENDING || runningTransition && node.tState === PENDING)
    return lookUpstream(node);
  if (node.suspense && untrack(node.suspense.inFallback))
    return node.suspense.effects.push(node);
  const ancestors = [node];
  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
    if (runningTransition && Transition.disposed.has(node))
      return;
    if (!runningTransition && node.state || runningTransition && node.tState)
      ancestors.push(node);
  }
  for (let i = ancestors.length - 1; i >= 0; i--) {
    node = ancestors[i];
    if (runningTransition) {
      let top = node, prev = ancestors[i + 1];
      while ((top = top.owner) && top !== prev) {
        if (Transition.disposed.has(top))
          return;
      }
    }
    if (!runningTransition && node.state === STALE || runningTransition && node.tState === STALE) {
      updateComputation(node);
    } else if (!runningTransition && node.state === PENDING || runningTransition && node.tState === PENDING) {
      const updates = Updates;
      Updates = null;
      lookUpstream(node, ancestors[0]);
      Updates = updates;
    }
  }
}
function runUpdates(fn, init) {
  if (Updates)
    return fn();
  let wait = false;
  if (!init)
    Updates = [];
  if (Effects)
    wait = true;
  else
    Effects = [];
  ExecCount++;
  try {
    const res = fn();
    completeUpdates(wait);
    return res;
  } catch (err) {
    handleError(err);
  } finally {
    Updates = null;
    if (!wait)
      Effects = null;
  }
}
function completeUpdates(wait) {
  if (Updates) {
    if (Scheduler && Transition && Transition.running)
      scheduleQueue(Updates);
    else
      runQueue(Updates);
    Updates = null;
  }
  if (wait)
    return;
  let res;
  if (Transition && Transition.running) {
    if (Transition.promises.size || Transition.queue.size) {
      Transition.running = false;
      Transition.effects.push.apply(Transition.effects, Effects);
      Effects = null;
      setTransPending(true);
      return;
    }
    const sources = Transition.sources;
    res = Transition.resolve;
    Effects.forEach((e) => {
      "tState" in e && (e.state = e.tState);
      delete e.tState;
    });
    Transition = null;
    batch(() => {
      sources.forEach((v2) => {
        v2.value = v2.tValue;
        if (v2.owned) {
          for (let i = 0, len = v2.owned.length; i < len; i++)
            cleanNode(v2.owned[i]);
        }
        if (v2.tOwned)
          v2.owned = v2.tOwned;
        delete v2.tValue;
        delete v2.tOwned;
        v2.tState = 0;
      });
      setTransPending(false);
    });
  }
  if (Effects.length)
    batch(() => {
      runEffects(Effects);
      Effects = null;
    });
  else {
    Effects = null;
  }
  if (res)
    res();
}
function runQueue(queue) {
  for (let i = 0; i < queue.length; i++)
    runTop(queue[i]);
}
function scheduleQueue(queue) {
  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    const tasks = Transition.queue;
    if (!tasks.has(item)) {
      tasks.add(item);
      Scheduler(() => {
        tasks.delete(item);
        runUpdates(() => {
          Transition.running = true;
          runTop(item);
          if (!tasks.size) {
            Effects.push.apply(Effects, Transition.effects);
            Transition.effects = [];
          }
        }, false);
        Transition && (Transition.running = false);
      });
    }
  }
}
function runUserEffects(queue) {
  let i, userLength = 0;
  for (i = 0; i < queue.length; i++) {
    const e = queue[i];
    if (!e.user)
      runTop(e);
    else
      queue[userLength++] = e;
  }
  if (sharedConfig.context)
    setHydrateContext();
  const resume = queue.length;
  for (i = 0; i < userLength; i++)
    runTop(queue[i]);
  for (i = resume; i < queue.length; i++)
    runTop(queue[i]);
}
function lookUpstream(node, ignore) {
  const runningTransition = Transition && Transition.running;
  if (runningTransition)
    node.tState = 0;
  else
    node.state = 0;
  for (let i = 0; i < node.sources.length; i += 1) {
    const source = node.sources[i];
    if (source.sources) {
      if (!runningTransition && source.state === STALE || runningTransition && source.tState === STALE) {
        if (source !== ignore)
          runTop(source);
      } else if (!runningTransition && source.state === PENDING || runningTransition && source.tState === PENDING)
        lookUpstream(source, ignore);
    }
  }
}
function markDownstream(node) {
  const runningTransition = Transition && Transition.running;
  for (let i = 0; i < node.observers.length; i += 1) {
    const o = node.observers[i];
    if (!runningTransition && !o.state || runningTransition && !o.tState) {
      if (runningTransition)
        o.tState = PENDING;
      else
        o.state = PENDING;
      if (o.pure)
        Updates.push(o);
      else
        Effects.push(o);
      o.observers && markDownstream(o);
    }
  }
}
function cleanNode(node) {
  let i;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
      if (obs && obs.length) {
        const n = obs.pop(), s = source.observerSlots.pop();
        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
  }
  if (Transition && Transition.running && node.pure) {
    if (node.tOwned) {
      for (i = 0; i < node.tOwned.length; i++)
        cleanNode(node.tOwned[i]);
      delete node.tOwned;
    }
    reset(node, true);
  } else if (node.owned) {
    for (i = 0; i < node.owned.length; i++)
      cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i = 0; i < node.cleanups.length; i++)
      node.cleanups[i]();
    node.cleanups = null;
  }
  if (Transition && Transition.running)
    node.tState = 0;
  else
    node.state = 0;
  node.context = null;
}
function reset(node, top) {
  if (!top) {
    node.tState = 0;
    Transition.disposed.add(node);
  }
  if (node.owned) {
    for (let i = 0; i < node.owned.length; i++)
      reset(node.owned[i]);
  }
}
function handleError(err) {
  const fns = ERROR && lookup(Owner, ERROR);
  if (!fns)
    throw err;
  fns.forEach((f) => f(err));
}
function lookup(owner, key) {
  return owner ? owner.context && owner.context[key] !== void 0 ? owner.context[key] : lookup(owner.owner, key) : void 0;
}
function resolveChildren(children2) {
  if (typeof children2 === "function" && !children2.length)
    return resolveChildren(children2());
  if (Array.isArray(children2)) {
    const results = [];
    for (let i = 0; i < children2.length; i++) {
      const result = resolveChildren(children2[i]);
      Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results;
  }
  return children2;
}
function createProvider(id) {
  return function provider(props) {
    let res;
    createComputed(() => res = untrack(() => {
      Owner.context = {
        [id]: props.value
      };
      return children(() => props.children);
    }));
    return res;
  };
}
var FALLBACK = Symbol("fallback");
var SuspenseListContext = createContext();

// src/template.ts
var import_benny = __toESM(require("benny"));
async function createTemplate(opts) {
  await import_benny.default.suite(opts.name, ...opts.operations.map((item) => import_benny.default.add(item.name, () => item.call())), import_benny.default.cycle(), import_benny.default.complete(), import_benny.default.save({ file: opts.name, format: "json" }), import_benny.default.save({ file: opts.name, format: "chart.html" }));
}

// src/effect-create.ts
async function effectCreate() {
  await createTemplate({
    name: "effect-create",
    operations: [
      {
        name: "compostate",
        call() {
          N(() => {
          });
        }
      },
      {
        name: "solid-js",
        call() {
          createEffect(() => {
          });
        }
      }
    ]
  });
}

// src/signal-create.ts
async function signalCreate() {
  await createTemplate({
    name: "signal-create",
    operations: [
      {
        name: "compostate",
        call() {
          Qe(0);
        }
      },
      {
        name: "solid-js",
        call() {
          createSignal(0);
        }
      }
    ]
  });
}

// src/signal-read.ts
var [a2, setA] = Qe(0);
var [b2, setB] = createSignal(0);
async function signalRead() {
  await createTemplate({
    name: "signal-read",
    operations: [
      {
        name: "compostate",
        call() {
          a2();
        }
      },
      {
        name: "solid-js",
        call() {
          b2();
        }
      }
    ]
  });
}

// src/signal-write.ts
var [a3, setA2] = Qe({});
var [b3, setB2] = createSignal({});
async function signalWrite() {
  await createTemplate({
    name: "signal-write",
    operations: [
      {
        name: "compostate",
        call() {
          setA2({});
        }
      },
      {
        name: "solid-js",
        call() {
          setB2({});
        }
      }
    ]
  });
}

// src/signal-write-1000-effects.ts
var [a4, setA3] = Qe({});
var [b4, setB3] = createSignal({});
for (let i = 0; i < 1e3; i += 1) {
  N(a4);
  createEffect(b4);
}
async function signalWrite1000Effects() {
  await createTemplate({
    name: "signal-write-1000-effects",
    operations: [
      {
        name: "compostate",
        call() {
          setA3({});
        }
      },
      {
        name: "solid-js",
        call() {
          setB3({});
        }
      }
    ]
  });
}

// src/index.ts
async function start() {
  await signalCreate();
  await effectCreate();
  await signalRead();
  await signalWrite();
  await signalWrite1000Effects();
}
start().then(() => {
  console.log("Done!");
}, (err) => {
  console.error(err);
  process.exit(1);
});
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2021 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2021
 */
