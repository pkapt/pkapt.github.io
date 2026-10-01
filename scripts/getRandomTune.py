

from xml.etree.ElementTree import QName
import random

SECTION_SEP = '---'

tunes = None
try:
    tunes = open('../_posts/2021-12-08-tunes.md', 'r+')
except FileNotFoundError:
    tunes = open('_posts/2021-12-08-tunes.md', 'r+')


lines = tunes.readlines()

tuneslist = []
sectionSeparatorCount = 0
tunes_start = 0
tunes_end = 0
for k, line in enumerate(lines):
    if line[:3] == SECTION_SEP:
        sectionSeparatorCount += 1

    if sectionSeparatorCount == 3 and tunes_start == 0:
        tunes_start = k
    if sectionSeparatorCount == 4 and tunes_end == 0:
        tunes_end = k
    if sectionSeparatorCount == 3: # dont want to sort the transcriptions section
        if line[:3] == '* [':
            for i, c in enumerate(line):
                if c == ']':
                    name_end = i
                    break
            tune_name = line[3:name_end]
            tuneslist.append(tune_name)

tune = random.choice(tuneslist)

print("\n"+tune+"\n")
