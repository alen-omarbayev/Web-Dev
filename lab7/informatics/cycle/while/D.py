n = int(input())
i = 0

while 2**i <= n:
    if 2**i == n:
        print("YES")
        break
    i += 1
else:
    print("NO")