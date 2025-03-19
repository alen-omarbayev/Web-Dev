n = str(input())
rslt = 0
rev_n = n[::-1]
for idx, digit in enumerate(rev_n):
    rslt += int(digit) * (2 ** idx)
print(rslt)
