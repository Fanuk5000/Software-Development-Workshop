// * Тип колекції
// Множина типу HashSet, яка містить об'єкти "Точка", що описуються як (х, у)

// * Обробка колекції
// Створити множину точок заданої кількості.
// Потім визначити три різні точки, що складають трикутник найбільшого периметру.
// Користувач задає кількість точок, наприклад, 5. Згенерувати 5 точок з координатами (х,у).
// Треба перебрати всі можливі трійки точок з зазначених 5 і порахувати для них периметри.

import promptSync from "prompt-sync";

const uniquePoints = new Set<string>();

function addPoint(x: number, y: number): void {
    const pointStr = `${x},${y}`;
    uniquePoints.add(pointStr);
}

const prompt = promptSync({ sigint: true });

let tries = 0;
while (tries < 5) {
    console.log(`Cords ${tries + 1} of 5:`);

    const xInput = prompt("Enter x(int): ");
    if (!xInput) continue;
    const x = Number(xInput);
    if (!Number.isInteger(x)) continue;

    const yInput = prompt("Enter y(int): ");
    if (!yInput) continue;
    const y = Number(yInput);
    if (!Number.isInteger(y)) continue;

    console.log(`Point (${x}, ${y}) has been added.\n`);
    addPoint(x, y);
    tries += 1;
}
console.log(`Unique points entered: ${uniquePoints.size}`);

interface Point {
    x: number;
    y: number;
}
const pointsArray: Point[] = Array.from(uniquePoints).map((str) => {
    const parts = str.split(",");
    const x = Number(parts[0]);
    const y = Number(parts[1]);
    return { x, y };
});

function calc_max_perimeter(pointsArr: Point[]): string {
    if (pointsArr.length < 3) {
        throw new Error(
            "Not enough points to form a triangle. Please provide at least 3 unique points.",
        );
    }

    let maxPerimeter = 0;
    let bestCoords = "";

    for (let i = 0; i < pointsArr.length - 2; i++) {
        for (let j = i + 1; j < pointsArr.length - 1; j++) {
            for (let k = j + 1; k < pointsArr.length; k++) {
                const p1 = pointsArr[i]!;
                const p2 = pointsArr[j]!;
                const p3 = pointsArr[k]!;

                const A = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
                const B = Math.sqrt((p3.x - p2.x) ** 2 + (p3.y - p2.y) ** 2);
                const C = Math.sqrt((p1.x - p3.x) ** 2 + (p1.y - p3.y) ** 2);

                const perimeter = A + B + C;

                if (perimeter > maxPerimeter) {
                    maxPerimeter = perimeter;
                    bestCoords = `(${p1.x}, ${p1.y}) - (${p2.x}, ${p2.y}) - (${p3.x}, ${p3.y})`;
                }
            }
        }
    }

    return `${maxPerimeter.toFixed(2)}: ${bestCoords}`;
}

try {
    const result = calc_max_perimeter(pointsArray);
    console.log(`Max perimeter: ${result}`);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error(String(error));
    }
}
