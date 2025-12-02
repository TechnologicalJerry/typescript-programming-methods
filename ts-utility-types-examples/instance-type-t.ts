/**
 * InstanceType<T> – type of class instance.
 */

const logTypeExample = (label: string, value: unknown) => {
  console.log(`${label}:`, value);
};

(() => {
  class Repository {
      constructor(public table: string) {}
      count() {
        return 42;
      }
    }
    type RepositoryInstance = InstanceType<typeof Repository>;
    const repo: RepositoryInstance = new Repository("users");
    logTypeExample("InstanceType<typeof Repository>", repo.count());
  
    type DateInstance = InstanceType<typeof Date>;
    const date: DateInstance = new Date();
    logTypeExample("InstanceType<typeof Date>", date.toISOString());
})();
