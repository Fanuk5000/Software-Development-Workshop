import promptSync from "prompt-sync";
// ! Варіант 16
// * Зовнішній клас
// Комп'ютер:
// містить інформацію щодо своїх
// властивостей

// * Внутрішній клас
// Властивість:
// містить опис типу та значення (операційна система,
// процесор, оперативна пам'ять)

class ComputerProperty {
    constructor(
        public type: string,
        public value: string,
        public description: string = "",
    ) {}
}

class Computer {
    constructor(
        public case_name: string,
        public properties: ComputerProperty[] = [],
    ) {}

    public addProperty(type: string, value: string, description: string = ""): void {
        const property = new ComputerProperty(type, value, description);
        this.properties.push(property);
    }

    public searchProperty(keyword: string): void {
        console.log(`Finding by key ${keyword} in computer case ${this.case_name}`);
        let found = false;

        for (const prop of this.properties) {
            if (
                prop.type.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()) ||
                prop.value.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
            ) {
                console.log(`- Value : ${prop.type} — ${prop.value}`);
                found = true;
            }

            if (!found) {
                console.log("Property has not been found!");
            }
        }
    }
}
const myPC = new Computer("Be quiet 5000");

const prompt = promptSync({ sigint: true });
const props = ["OS", "RAM", "CPU", "GPU", "Storage"];

for (const prop of props) {
    const value = prompt(`Enter the value for ${prop}: `);
    myPC.addProperty(prop, value);
}
const searchKey = prompt("Enter the keyword to search for: ");
myPC.searchProperty(searchKey);
const searchValue = prompt("Enter the value to search for: ");
myPC.searchProperty(searchValue);
