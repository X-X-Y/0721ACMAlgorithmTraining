if __name__=='__main__':
    n = int(input())
    num = list(map(int,input().split()))
    count = 0
    for i in range(n-1):
        count += max(num[i]-num[i+1],0)
    print(count+num[-1])
