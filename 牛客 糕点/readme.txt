时间限制：C/C++ 1秒，其他语言2秒

空间限制：C/C++ 256M，其他语言512M

小团的蛋糕铺长期霸占着美团APP中“蛋糕奶茶”栏目的首位，因此总会吸引各路食客前来探店。

小团一天最多可以烤n个蛋糕，每个蛋糕有一个正整数的重量。

早上，糕点铺已经做好了m个蛋糕。

现在，有一个顾客要来买两个蛋糕，他希望买这一天糕点铺烤好的最重的和最轻的蛋糕，并且希望这两个蛋糕的重量恰好为a和b。剩余的n-m个蛋糕可以现烤，请问小团能否满足他的要求？

数据范围：，
进阶：时间复杂度,空间复杂度

输入描述:
输入包含多组数据，每组数据两行。

每组数据的第一行包含4个整数，n,m,a,b，空格隔开。这里不保证a和b的大小关系。

接下来一行m个数，空格隔开，代表烤好的蛋糕重量


输出描述:
对于每一组数据，如果可以办到顾客的要求，输出YES，否则输出NO


输入例子1:
4 2 2 4
3 3
4 2 2 4
1 1
4 2 2 4
5 5
4 2 4 2
2 4
2 2 2 4
3 3
3 2 2 4
3 3
3 2 2 4
3 3

输出例子1:
YES
NO
NO
YES
NO
NO
NO