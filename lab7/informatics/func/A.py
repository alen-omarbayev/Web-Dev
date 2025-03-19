def min(arr):
    min = arr[0]
    for i in arr:
        if i <min:
            min = i
    print(min)

arr = list(map(int, input().split()))
min(arr)