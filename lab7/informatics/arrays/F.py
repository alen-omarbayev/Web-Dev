n = int(input())
arr = list(map(int, input().split()))
cnt = 0
for i in range(2, n):
    if arr[i-2]<arr[i-1] and arr[i]<arr[i-1]:
        cnt +=1

print(cnt)