/**
 * any – opt-out of type checking (use sparingly).
 */

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  let dynamic: any = 5;
    dynamic = dynamic.toFixed(2);
    dynamic = { nested: true }; // no errors
    logTypeExample("any", dynamic);
  
    const unsafe: any = "text";
    logTypeExample("any unsafe call", unsafe.nonExistent?.());
})();
