import random
import re
from pathlib import Path


def tunes_data_path() -> Path:
    repo_root = Path(__file__).resolve().parents[1]
    return repo_root / "src" / "data" / "tunes.ts"


data = tunes_data_path().read_text(encoding="utf-8")
tunes_block = re.search(r"export const tunes: LinkItem\[] = \[(.*?)\];", data, re.S)

if not tunes_block:
    raise RuntimeError("Could not find the tunes array in src/data/tunes.ts")

tunes = re.findall(r'name: "([^"]+)"', tunes_block.group(1))

if not tunes:
    raise RuntimeError("No tunes found in src/data/tunes.ts")

print(f"\n{random.choice(tunes)}\n")
