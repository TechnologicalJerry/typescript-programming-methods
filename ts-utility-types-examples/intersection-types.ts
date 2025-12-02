/**
 * Intersection types – merge multiple types into one.
 */

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  type Auditable = { createdAt: Date };
    type Entity = { id: number };
    type AuditedEntity = Auditable & Entity;
    const record: AuditedEntity = { id: 1, createdAt: new Date() };
    const extended: AuditedEntity = { id: 2, createdAt: new Date("2024-01-01") };
    logTypeExample("Intersection record", record);
    logTypeExample("Intersection extended", extended);
})();
