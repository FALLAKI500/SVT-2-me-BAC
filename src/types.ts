export type QuestionType = 'qcm' | 'dropdown' | 'matching' | 'table';

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  title: string;
  instruction: string;
  explanation: string; // Scientific explanation of the answer
  explanationAr?: string; // Optional Arabic summary/translation of explanation
}

// 1. MCQ Question type
export interface QcmQuestion extends BaseQuestion {
  type: 'qcm';
  options: string[];
  correctIndices: number[]; // Can be single or multiple choice
  allowMultiple: boolean;
}

// 2. Dropdown (Monsadila) Question type
export interface DropdownKey {
  id: string;
  options: string[];
  correctValue: string;
}

export interface DropdownQuestion extends BaseQuestion {
  type: 'dropdown';
  /**
   * Text with placeholder tokens, e.g., "Le cycle de Krebs se déroule dans [drop-0] et produit [drop-1]."
   */
  textWithPlaceholders: string;
  dropdowns: { [key: string]: DropdownKey }; // Key matches token like "drop-0"
}

// 3. Matching (Mrbota / Connect) Question type
export interface MatchingPair {
  leftId: string;
  leftText: string;
  rightId: string;
  rightText: string;
}

export interface MatchingQuestion extends BaseQuestion {
  type: 'matching';
  leftItems: { id: string; text: string }[];
  rightItems: { id: string; text: string }[];
  correctPairs: { [leftId: string]: string }; // leftId -> rightId
}

// 4. Table Grid (Jadwal) Question type
export interface TableRow {
  id: string;
  statement: string; // Row detail, e.g., "Produit du CO2 et de l'ATP"
  expectedChoices: { [columnId: string]: boolean }; // columnId -> correct or not
}

export interface TableCategory {
  id: string;
  label: string; // e.g. "Respiration Cellulaire", "Fermentation"
}

export interface TableQuestion extends BaseQuestion {
  type: 'table';
  columns: TableCategory[];
  rows: TableRow[];
}

export type SVTQuestion = QcmQuestion | DropdownQuestion | MatchingQuestion | TableQuestion;

export interface SVTModule {
  id: string;
  title: string;
  titleAr?: string;
  description: string;
  color: string;
  questions: SVTQuestion[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}
