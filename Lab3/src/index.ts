const { Animal, AnimalManager, Colors } = require("./animal");

function main() {
    const Animals: (typeof Animal)[] = [
        new Animal(
            "Ссавець",
            "Ссавці",
            "Котячі",
            "Пантера",
            "Пантера леопардова",
            "Пантера леопардова азійська",
            5,
            Colors.orange,
        ),
        new Animal(
            "Птах",
            "Птахи",
            "Соколові",
            "Сокіл",
            "Сокіл-сапсан",
            "Сокіл-сапсан європейський",
            3,
            Colors.grey,
        ),
        new Animal(
            "Риба",
            "Риби",
            "Карпові",
            "Короп",
            "Короп звичайний",
            "Короп звичайний європейський",
            2,
            Colors.brown,
        ),
        new Animal(
            "Комаха",
            "Комахи",
            "Бабкові",
            "Бабка",
            "Бабка-стрілка",
            "Бабка-стрілка зелена",
            1,
            Colors.green,
        ),
        new Animal(
            "Плазун",
            "Плазуни",
            "Гадюкові",
            "Гадюка",
            "Гадюка звичайна",
            "Гадюка звичайна європейська",
            4,
            Colors.black,
        ),
    ];
    const animal_manager = new AnimalManager(Animals);
    console.log("Тварини старші за 3 роки:");

    const higher_age = animal_manager.getHigherAgeThan(3);
    higher_age.forEach((animal: typeof Animal) => {
        console.log(animal.toString());
    });

    console.log("\nТварини з родини 'Котячі':");
    const by_family = animal_manager.getByFamily("Котячі");

    by_family.forEach((animal: typeof Animal) => {
        console.log(animal.toString());
    });

    console.log("\nТварини виду 'Короп звичайний' з коричневим забарвленням:");

    const by_species_and_color: (typeof Animal)[] = animal_manager.getBySpeciesAndColor(
        "Короп звичайний",
        Colors.brown,
    );
    by_species_and_color.forEach((animal: typeof Animal) => {
        console.log(animal.toString());
    });
}

main();
