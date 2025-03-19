n = int(input())
k = 0
power = 1

while power < n:
    power *= 2
    k += 1

print(k)