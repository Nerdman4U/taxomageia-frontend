function clone<T>(instance: T): T {
  const copy = new (instance.constructor as { new (): T })();
  Object.assign(copy, instance);
  return copy;
}

function random_number() {
  return `${Date.now()}${Math.floor(Math.random() * 10000)}`
}
function random_identifier(prefix: string): string {
  if (!prefix) {
    throw new Error('prefix is undefined')
  }
  return `${prefix}_${random_number()}`
}
function anonymous_user(): string {
  return random_identifier('user_account')
}

export {
  clone,
  random_number,
  random_identifier,
  anonymous_user
}

