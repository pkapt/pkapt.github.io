

from xml.etree.ElementTree import QName


tunes = None
try:
    tunes = open('../_posts/2021-12-08-tunes.md', 'r+')
except FileNotFoundError:
    print('here2')
    tunes = open('_posts/2021-12-08-tunes.md', 'r+')


lines = tunes.readlines()

tunesdict = {}
tuneslist = []
dashcount = 0
tunes_start = 0
tunes_end = 0
for k, line in enumerate(lines):
    if line[:3] == '---':
        dashcount += 1
    if dashcount == 2 and tunes_start == 0:
        tunes_start = k
    if dashcount == 3 and tunes_end == 0:
        tunes_end = k
    if dashcount == 2: # dont want to sort the transcriptions section
        if line[:3] == '* [':
            for i, c in enumerate(line):
                if c == ']':
                    name_end = i
                    break
            tune_name = line[3:name_end]
            tunesdict[tune_name] = line
            tuneslist.append(tune_name)
tuneslist.sort()
for i, tune in enumerate(tuneslist):
    tuneslist[i] = tunesdict[tune]

new_lines = lines[0:tunes_start+2] + tuneslist + ['\n'] + lines[tunes_end:]
new_tunes = open('newtunes.md', 'w+')
new_tunes.writelines(new_lines)
new_tunes.close()

