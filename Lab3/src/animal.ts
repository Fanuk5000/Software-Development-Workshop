const Colors = {
    orange: "#ff8000",
    black: "#000000",
    grey: "#413a3a",
    white: "#ffffff",
    brown: "#643915",
    beige: "#eac37f",
} as const;

class Animal {
    constructor(
        public animal_type: string,
        public animal_class: string,
        public family: string,
        public genus: string,
        public species: string,
        public subspecies: string,
        public age: number,
        public coloration: typeof Colors,
    ) {}

    public toString(): string {
        return `${this.species} (${this.genus}, ${this.family}) — age: ${this.age}, color: ${this.coloration}`;
    }
}

class AnimalManager {
    constructor(private animals: Animal[]) {}

    public getHigherAgeThan(minAge: number): Animal[] {
        let higher_age: Animal[] = [];
        this.animals.forEach((animal) => {
            animal.age > minAge ? higher_age.push(animal) : null;
        });
        return higher_age;
    }
    public getByFamily(family: string): Animal[] {
        return this.animals.filter((animal) => animal.family === family);
    }
    public getBySpeciesAndColor(species: string, coloration: typeof Colors): Animal[] {
        return this.animals.filter(
            (animal) => animal.species === species && animal.coloration === coloration,
        );
    }
}

module.exports = {
    Colors,
    Animal,
    AnimalManager,
};
