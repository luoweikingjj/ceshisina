<?php
/**
 *法基础-字符移位
小Q最近遇到了一个难题：把一个字符串的大写字母放到字符串的后面，各个字符的相对位置不变，且不能申请额外的空间。
你能帮帮小Q吗？


输入描述:

输入数据有多组，每组包含一个字符串s，且保证:1<=s.length<=1000.



输出描述:

对于每组数据，输出移位后的字符串。

输入例子:
AkleBiCeilD

输出例子:
kleieilABCD
 */

/**
 * 不能申请额外的空间
 */

function deal($str) {
    $l = strlen($str);
    for ($i = 0; $i < $l; $i++) {
        // echo $str[$i], '<br/>';
        if (ord($str[$i]) > 64 && ord($str[$i]) < 91) {
            $str .= $str[$i];
            $str[$i] = '';
            $i--;
            $l--;
        }
    }
    echo $str;
}

deal("adsAdfVsfBd");