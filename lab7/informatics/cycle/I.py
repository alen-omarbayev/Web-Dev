a = int (input())
c = 0
for i in range(1, a+1):
    if a%i == 0:
        c += 1

print(c)