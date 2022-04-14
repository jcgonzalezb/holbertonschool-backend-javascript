/* eslint-disable */
export default function guardrail(mathFunction) {
  const queue = [];
  let result = null;

  try {
    result = mathFunction();
  } catch (err) {
    result = `${err.name}: ${err.message}`;
  }

  queue.push(result);
  queue.push('Guardrail was processed');
  return queue;
}
