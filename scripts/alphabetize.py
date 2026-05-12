import re
from pathlib import Path


repo_root = Path(__file__).resolve().parents[1]
tunes_path = repo_root / "src" / "data" / "tunes.ts"
data = tunes_path.read_text(encoding="utf-8")

match = re.search(r"(export const tunes: LinkItem\[] = \[)(.*?)(\];)", data, re.S)
if not match:
    raise RuntimeError("Could not find the tunes array in src/data/tunes.ts")

items = re.findall(r'\{ name: "([^"]+)", href: "([^"]+)" \}', match.group(2))
items.sort(key=lambda item: item[0].lower())

lines = [
    f'  {{ name: "{name}", href: "{href}" }}{"," if index < len(items) - 1 else ""}'
    for index, (name, href) in enumerate(items)
]
replacement = match.group(1) + "\n" + "\n".join(lines) + "\n" + match.group(3)
tunes_path.write_text(data[:match.start()] + replacement + data[match.end():], encoding="utf-8")
