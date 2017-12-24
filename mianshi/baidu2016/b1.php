<?php
/**
 *罪犯转移
C市现在要转移一批罪犯到D市，C市有n名罪犯，按照入狱时间有顺序，另外每个罪犯有一个罪行值，值越大罪越重。现在为了方便管理，市长决定转移入狱时间连续的c名犯人，同时要求转移犯人的罪行值之和不超过t，问有多少种选择的方式？

输入描述:
第一行数据三个整数:n，t，c(1≤n≤2e5,0≤t≤1e9,1≤c≤n)，第二行按入狱时间给出每个犯人的罪行值ai(0≤ai≤1e9)


输出描述:
一行输出答案。

输入例子:
3 100 2
1 2 3

输出例子:
2
 */
/**
 * 入狱时间连续  不能排序
 */
function deal($t, $c, $arr) {
    // sort($arr);
    $t = [];
    $n = count($arr);
    for ($i = 0; $i < $n - $c + 1; $i++) {
        $narr = array_slice($arr, $i, $c);
        $sum = array_sum($narr);
        if ($sum <= $t) {
            $t[] = $narr;
        }
    }

    $count = count($t);
    echo "number==", $count;
}
deal(100, 2, [1, 2, 3]);