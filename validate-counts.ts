import { unit1Groups } from './src/data/unit1Questions';
import { unit2Groups } from './src/data/unit2Questions';
import { unit3Groups } from './src/data/unit3Questions';
import { unit4Groups } from './src/data/unit4Questions';
import { unit5Groups } from './src/data/unit5Questions';

const allGroups = [
  unit1Groups,
  unit2Groups,
  unit3Groups,
  unit4Groups,
  unit5Groups
];

let hasError = false;

allGroups.forEach((groups, uIdx) => {
  if (!groups || groups.length !== 5) {
      console.error(`Unit ${uIdx + 1} does not have exactly 5 groups (has ${groups?.length})`);
      hasError = true;
  }
  groups.forEach((group, gIdx) => {
    if (!group) {
        console.error(`Group ${gIdx + 1} in unit ${uIdx + 1} is undefined!`);
        hasError = true;
    } else {
        group.forEach((q, qIdx) => {
          if (!q) {
             console.error(`Question ${qIdx + 1} in unit ${uIdx + 1}, group ${gIdx + 1} is undefined/null!`);
             hasError = true;
          }
        });
    }
  });
});

if (!hasError) {
  console.log("All counts are perfect!");
}
