def sumOr(a,b):
    if (a == 1 or b == 1) or (a==1 and b==1):
        print(1)
    else:
        print(0)

a, b = map(int, input().split())
sumOr(a,b)