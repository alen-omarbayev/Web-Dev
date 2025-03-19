a = int(input())
b = int(input())
c = int(input())
d = int(input())

e = ""
for i in range(a, b+1):
    if i%d == c:
        e += str(i)+' '

print(e)