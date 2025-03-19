n = int(input())
arr = list(map(int, input().split()))

for i in range(1, n):
    if (arr[i]<0 and arr[i-1]<0) or (arr[i]>0 and arr[i-1]>0):
        print("YES")
        break
else:
    print("NO")