n = int(input())
arr = list(map(int, input().split()))
c = []
for i, num in enumerate(arr):
    if i%2 == 0:
        c.append(num)

print(*c)