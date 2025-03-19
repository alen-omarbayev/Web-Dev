a = int (input())
c = ""
for i in range(1, a+1):
    if a%i == 0:
        c += str(i)+' '

print(c)