a = int(input())
b = int(input())
c = ""
for i in range(a, b+1):
    for j in range(1, b+1):
        if j**2 == i:
            c += str(i)+' '
print(c)