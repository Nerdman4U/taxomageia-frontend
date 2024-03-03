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
  random_number,
  random_identifier,
  anonymous_user
}

