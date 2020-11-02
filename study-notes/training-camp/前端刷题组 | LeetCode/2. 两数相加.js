/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 */

{
  let addTwoNumbers = function (l1, l2) {
    if (!l1) return l2
    if (!l2) return l1

    let dummyHead = new ListNode(0)
    let cur = dummyHead

    let carry = 0
    while (l1 || l2) {
      let v1 = 0
      if (l1) {
        v1 = l1.val
        l1 = l1.next
      }
      let v2 = 0
      if (l2) {
        v2 = l2.val
        l2 = l2.next
      }
      let sum = v1 + v2 + carry
      carry = Math.floor(sum / 10)
      cur.next = new ListNode(sum % 10)
      cur = cur.next
    }

    if (carry > 0) {
      cur.next = new ListNode(carry)
    }

    return dummyHead.next
  }
}