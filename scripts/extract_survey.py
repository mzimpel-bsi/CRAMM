import json
from pathlib import Path
import openpyxl

workbook_path = Path('xlsx/CRA_Maturity_Model_TOOL.xlsx')
wb = openpyxl.load_workbook(workbook_path, data_only=True)
ws = wb['Questionnaire']

rows = list(ws.iter_rows(values_only=True))

# The questionnaire sheet appears to contain a header-style row followed by question rows.
# We will extract rows with a non-empty first column and a non-empty question text.
questions = []
for row in rows:
    if not row:
        continue
    first = str(row[0]).strip() if row[0] is not None else ''
    second = str(row[1]).strip() if len(row) > 1 and row[1] is not None else ''
    question_text = str(row[2]).strip() if len(row) > 2 and row[2] is not None else ''
    if first and question_text and 'Domain' not in question_text and 'Question' not in question_text:
        questions.append({
            'domain': first,
            'ref': second,
            'question': question_text,
            'level_descriptions': [
                str(row[3]).strip() if len(row) > 3 and row[3] is not None else '',
                str(row[4]).strip() if len(row) > 4 and row[4] is not None else '',
                str(row[5]).strip() if len(row) > 5 and row[5] is not None else '',
                str(row[6]).strip() if len(row) > 6 and row[6] is not None else '',
                str(row[7]).strip() if len(row) > 7 and row[7] is not None else '',
            ],
        })

out_path = Path('scripts/survey_data.json')
out_path.write_text(json.dumps(questions, indent=2, ensure_ascii=False), encoding='utf-8')
print(f'Wrote {len(questions)} questions to {out_path}')
