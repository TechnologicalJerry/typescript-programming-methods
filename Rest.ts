let Greet = (greeting: string, ...names: string[]) => {
    return greeting + " " + names.join(", ") + "!";
}

Greet("Hello", "Steve", "Bill");

Greet("Hello"); 