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
  groups.forEach((group, gIdx) => {
    group.forEach((q, qIdx) => {
      if (q.type === 'qcm' && !q.options) {
        console.error(`Missing options in unit ${uIdx + 1}, group ${gIdx + 1}, question ${qIdx + 1} (${q.id})`);
        hasError = true;
      }
      if (q.type === 'qcm' && !q.correctIndices) {
        console.error(`Missing correctIndices in unit ${uIdx + 1}, group ${gIdx + 1}, question ${qIdx + 1} (${q.id})`);
        hasError = true;
      }
      if (q.type === 'dropdown' && !q.dropdowns) {
        console.error(`Missing dropdowns in unit ${uIdx + 1}, group ${gIdx + 1}, question ${qIdx + 1} (${q.id})`);
        hasError = true;
      }
      if (q.type === 'matching' && (!q.leftItems || !q.rightItems || !q.correctPairs)) {
        console.error(`Missing matching props in unit ${uIdx + 1}, group ${gIdx + 1}, question ${qIdx + 1} (${q.id})`);
        hasError = true;
      }
      if (q.type === 'table' && (!q.columns || !q.rows)) {
         console.error(`Missing table props in unit ${uIdx + 1}, group ${gIdx + 1}, question ${qIdx + 1} (${q.id})`);
         hasError = true;
      }
    });
  });
});

if (!hasError) {
  console.log("All questions are perfectly formatted!");
}

