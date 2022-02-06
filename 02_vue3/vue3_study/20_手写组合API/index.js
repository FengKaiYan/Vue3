// shallowReactive(浅的劫持，浅的监视，浅的响应数据)与reactive(深的)

// 定义一个reativeHandler处理对象

const reativeHandler = {
  get(target, prop) {
    const result = Reflect.get(target, prop);
    console.log("拦截ing get", target, prop);
    return result;
  },
  set(target, prop, value) {
    const result = Reflect.set(target, prop, value);
    console.log("拦截ing set", target, prop, value);
    return result;
  },
  deleteProperty(target, prop) {
    const result = Reflect.deleteProperty(target, prop);
    console.log("拦截ing deleteProperty", target, prop);
    return result;
  },
};

// 定义一个shallowReactive函数，传入一个目标对象
function shallowReactive(target) {
  // 判断当前的目标对象是不是object类型（对象/数组）

  if (target && typeof target === "object") {
    return new Proxy(target, reativeHandler);
  }

  // 如果传入的数据是基本类型数据 就直接返回
  return target;
}

// 定义一个reactive函数，传入一个目标对象
function reactive(target) {
  // 判断当前的目标对象是不是object类型（对象/数组）

  if (target && typeof target === "object") {
    // 对数组或对象中的所有数据进行reactive的递归处理
    // 判断是不是数组
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        target[index] = reactive(item);
      });
    } else {
      // 判断是不是对象
      Object.keys(target).forEach((key) => {
        target[key] = reactive(target[key]);
      });
    }

    return new Proxy(target, reativeHandler);
  }

  // 如果传入的数据是基本类型数据 就直接返回

  return target;
}

const readonlyHandler = {
  get(target, prop) {
    const result = Reflect.get(target, prop);
    console.log("拦截ing get", target, prop);
    return result;
  },
  set(target, prop, value) {
    console.error("拦截ing set 属性只读");
    return true;
  },
  deleteProperty(target, prop) {
    console.error("拦截ing deleteProperty 属性只读");
    return true;
  },
};
// 定义一个shallowReadonly函数，传入一个目标对象
function shallowReadonly(target) {
  if (target && typeof target === "object") {
    return new Proxy(target, readonlyHandler);
  }

  return target;
}

// 定义一个readonly函数，传入一个目标对象
function readonly(target) {
  if (target && typeof target === "object") {
    // 判断数组
    if (Array.isArray(target))
      target.forEach((item, index) => {
        target[index] = shallowReadonly(item);
      });
    else
      Object.keys(target).forEach((key) => {
        target[key] = shallowReadonly(target[key]);
      });

    return new Proxy(target, readonlyHandler);
  }

  return target;
}

function shallowRef(target) {
  const result = {
    _value: target,
    _is_ref: true,
    get value() {
      return this._value;
    },
    set value(val) {
      this._value = val;
      console.log("数据已更新 去更新页面");
    },
  };
  return result;
}

function ref(target) {
  if (target && typeof target === "object") {
    return reactive(target);
  }
  const result = {
    _value: target,
    _is_ref: true,
    get value() {
      return this._value;
    },
    set value(val) {
      this._value = val;
      console.log("数据已更新 去更新页面");
    },
  };
  return result;
}
