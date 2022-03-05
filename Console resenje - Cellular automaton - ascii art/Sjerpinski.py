"""
Koristeci Cellular automaton iscrtacu trougao Sjerpinskog u konzolu; stanje 1 celije je mapirano na #; stanje 0
je mapirano na .;
Pravila: Stanje celije je 1 ako:
1) Stanje celije direktno iznad nje je 1;
2) Stanje celija levo/desno od one direktno iznad je 1 (mogu i obe biti sa stanjem 1);
3) Stanje celije direktno iznad nje je 1 i stanje celija levo/desno od te je 1
Rule 126 (01111110)
"""

# lista curr_row je trenutni red sa scale brojem celija
scale = 128
curr_row = [0] * scale
curr_row[int(scale/2)] = 1

# dict mapper mapira 1/0 to #/.
mapper = {0: '.', 1: '#'}
print(*list(mapper[i] for i in curr_row))  # printuje prvi red

# loop koji printuje ostalih scale/2 redova
counter = 1
while counter < int(scale/2):
    new_row = []
    # for loop odredjuje stanja celija u novom redu
    for i in range(0, scale):
        if 0 < i < scale - 1:  # unutrasnje celije
            if curr_row[i] and curr_row[i - 1] and curr_row[i + 1]:
                new_row.append(0)
            elif not(curr_row[i] or curr_row[i - 1] or curr_row[i + 1]):
                new_row.append(0)
            else:
                new_row.append(1)
        elif i == 0:  # skroz leva celija; proverava gornjeg desnog suseda
            if curr_row[1]:
                new_row.append(1)
            else:
                new_row.append(0)
        elif i == scale - 1:  # skroz desna celija; proverava gornjeg levog suseda
            if curr_row[scale - 2]:
                new_row.append(1)
            else:
                new_row.append(0)
    print(*list(mapper[i] for i in new_row))
    curr_row = new_row[:]
    counter += 1

""" Tim Urosevci23: Sergej Vukasovic
                    Milan Jovanovic
                    Boris Antonijev
                    Vladimir Krstic
"""