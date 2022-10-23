# （链表）虚拟头节点

（1）删除链表中某个元素
删除链表中等于给定值 val 的所有节点

![](https://img-blog.csdnimg.cn/20210316095619221.png)

（2）链表元素两两交换
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

示例：
输入：head = [1,2,3,4]
输出：[2,1,4,3]

![](https://code-thinking.cdn.bcebos.com/pics/24.%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B92.png)

![](https://code-thinking.cdn.bcebos.com/pics/24.%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B93.png)

（3）（虚拟头节点 + 双指针）删除倒数第 n 个元素
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

示例：
输入：head = [1,2,3,4,5], n = 2 输出：[1,2,3,5]

解析：  
使用虚拟头节点法 + 双指针法 如果要删除倒数第 n 个节点，让 fast 移动 n 步，然后让 fast 和 slow 同时移动，直到 fast 指向链表末尾。删掉 slow 所指向的节点就可以了

删除 slow 指向的下一个节点，如图：
![](https://code-thinking.cdn.bcebos.com/pics/19.%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E7%9A%84%E5%80%92%E6%95%B0%E7%AC%ACN%E4%B8%AA%E8%8A%82%E7%82%B93.png)

（4）（虚拟头节点 + 双指针）链表相交  
给你两个单链表的头节点  headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。

图示两个链表在节点 c1 开始相交：

![](https://code-thinking-1253855093.file.myqcloud.com/pics/20211219221657.png)

解析：
定义双指针，分别指向 A 和 B 的头部。
潜在条件：A 指针和 B 指针走过的路程是相等的，据此列等式即可得出答案。

1. 如果链表一样长且有交点，则第一次遍历就能找到相同交点，返回 <br/>
   ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203142227354.png)

2. 如果不一样长且有交点，则指针遍历一条链表后，遍历另一条链表  
   如：A 链表的指针遍历完 A 了，下一步继续遍历 B 链表。B 链表的指针遍历完 B 了，下一步继续遍历 A 链表。
   如图所示，由于 a+c+b=b+c+a，所以两个指针在第二次遍历的时候，一定会在相交节点处相遇。<br/>
   ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203142227855.png)

3. 如果没有交点，则第二次遍历结束都是 null，遍历结束，返回 null  
   a+b=b+a，最终一定都会指向 null。<br/>
   ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203142228395.png)

其实这种情况也可以这么理解：A 和 B 的相交节点为 null，遍历两次，一定能找到相交节点。
