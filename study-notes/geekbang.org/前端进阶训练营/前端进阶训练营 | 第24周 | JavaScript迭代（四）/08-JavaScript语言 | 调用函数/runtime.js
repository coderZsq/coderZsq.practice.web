export class ExecutionContext {
  constructor(realm, lexicalEnvironment, variableEnvironment) {
    variableEnvironment = variableEnvironment || lexicalEnvironment;
    this.lexicalEnvironment = lexicalEnvironment;
    this.variableEnvironment = variableEnvironment;
    this.realm = realm;
  }
}

export class EnvironmentRecord {
  constructor(outer) {
    this.outer = outer;
    this.variables = new Map();
  }
  add(name) {
    this.variables.set(name, new JSUndefined());
  }
  get(name) {
    if (this.variables.has(name)) {
      return this.variables.get(name);
    } else if (this.outer) {
      return this.outer.get(name);
    } else {
      return new JSUndefined();
    }
  }
  set(name, value = new JSUndefined()) {
    if (this.variables.has(name)) {
      return this.variables.set(name, value);
    } else if (this.outer) {
      return this.outer.set(name, value);
    } else {
      return this.variables.set(name, value);
    }
  }
}

export class ObjectEnvironmentRecord {
  constructor(object) {
    this.object = object;
  }
  add(name) {
    this.object.set(name, new JSUndefined());
  }
  get(name) {
    return this.object.get(name);
    // TODO: with statement need outer
  }
  set(name, value = new JSUndefined()) {
    this.object.set(name, value);
    // TODO: with statement need outer
  }
}

export class Reference {
  constructor(object, property) {
    this.object = object;
    this.property = property;
  }
  set(value) {
    debugger;
    this.object.set(this.property, value);
  }
  get() {
    return this.object.get(this.property);
  }
}

export class Realm {
  constructor() {
    this.global = new Map();
    this.Object = new Map();
    this.Object.call = function () {};
    this.Object_prototype = new Map();
  }
}

// number string boolean object null undefined symbol
export class JSValue {
  get type() {
    if (this.constructor === JSNumber) {
      return 'number';
    }
    if (this.constructor === JSString) {
      return 'string';
    }
    if (this.constructor === JSBoolean) {
      return 'boolean';
    }
    if (this.constructor === JSObject) {
      return 'object';
    }
    if (this.constructor === JSNull) {
      return 'null';
    }
    if (this.constructor === JSSymbol) {
      return 'symbol';
    }
    return 'undefined';
  }
}

export class JSNumber extends JSValue {
  constructor(value) {
    super();
    this.memory = new ArrayBuffer(8);
    if (arguments.length) new Float64Array(this.memory)[0] = value;
    else new Float64Array(this.memory)[0] = 0;
  }
  get value() {
    return new Float64Array(this.memory)[0];
  }
  toString() {}
  toNumber() {
    return this;
  }
  toBoolean() {
    if (new Float64Array(this.memory)[0] === 0) {
      return new JSBoolean(false);
    } else {
      return new JSBoolean(true);
    }
  }
}

export class JSString extends JSValue {
  constructor(characters) {
    super();
    // this.memory = new ArrayBuffer(characters.length * 2);
    this.characters = characters;
  }
  toNumber() {}
  toString() {
    return this;
  }
  toBoolean() {
    if (new Float64Array(this.memory)[0] === 0) {
      return new JSBoolean(false);
    } else {
      return new JSBoolean(true);
    }
  }
}

export class JSBoolean extends JSValue {
  constructor(value) {
    super();
    this.value = value || false;
  }
  toNumber() {
    if (this.value) return new JSNumber(1);
    else return new JSNumber(0);
  }
  toString() {
    if (this.value) return new JSString(['t', 'r', 'u', 'e']);
    else return new JSString(['f', 'a', 'l', 's', 'e']);
  }
  toBoolean() {
    return this;
  }
}

export class JSObject extends JSValue {
  constructor(proto) {
    super();
    this.properties = new Map();
    this.prototype = proto || null;
  }
  set(name, value) {
    // TODO: writable etc.
    this.setProperty(name, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  }
  get(name) {
    // TODO: prototype chain && getter
    return this.getProperty(name).value;
  }
  setProperty(name, attributes) {
    this.properties.set(name, attributes);
  }
  getProperty(name, attributes) {
    return this.properties.get(name);
  }
  setPrototype(proto) {
    this.prototype = proto;
  }
  getPrototype(proto) {
    return this.prototype;
  }
}

export class JSNull extends JSValue {
  toNumber() {
    return new JSNumber(0);
  }
  toString() {
    return new JSString(['n', 'u', 'l', 'l']);
  }
  toBoolean() {
    return new Boolean(false);
  }
}

export class JSUndefined extends JSValue {
  toNumber() {
    return new JSNumber(NaN);
  }
  toString() {
    return new JSString(['u', 'n', 'd', 'e', 'f', 'i', 'n', 'e', 'd']);
  }
  toBoolean() {
    return new Boolean(false);
  }
}

export class JSSymbol extends JSValue {
  constructor(name) {
    super();
    this.name = name || '';
  }
}

export class CompletionRecord {
  constructor(type, value, target) {
    this.type = type || 'normal';
    this.value = value || new JSUndefined();
    this.target = target || null;
  }
}
