<pre>
#学号: G20200447060029
#姓名: 朱双泉
#班期: 6班
#小组: 2组
#作业&总结链接: https://github.com/coderZsq/Frontend-06-Template/tree/main/Week%2004
</pre>

<pre>
学习笔记

看完视频编写出所有课堂代码.
</pre>

```java
package com.coderZsq;

import java.util.HashMap;

public class Trie<V> {
    private int size;
    private Node<V> root;

    public int size() {
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public void clear() {
        size = 0;
        root = null;
    }

    public V get(String key) {
        Node<V> node = node(key);
        return node != null && node.word ? node.value : null;
    }

    public boolean contains(String key) {
        Node<V> node = node(key);
        return node != null && node.word;
    }

    public V add(String key, V value) {
        keyCheck(key);

        // 创建根节点
        if (root == null) {
            root = new Node<>(null);
        }

        Node<V> node = root;
        int len = key.length();
        for (int i = 0; i < len; i++) {
            char c = key.charAt(i);
            boolean emptyChildren = node.children == null;
            Node<V> childNode = emptyChildren ? null : node.children.get(c);
            if (childNode == null) {
                childNode = new Node<>(node);
                childNode.character = c;
                node.children = emptyChildren ? new HashMap<>() : node.children;
                node.children.put(c, childNode);
            }
            node = childNode;
        }

        if (node.word) { // 已经存在这个单词
            V oldValue = node.value;
            node.value = value;
            return oldValue;
        }

        // 新增一个单词
        node.word = true;
        node.value = value;
        size++;
        return null;
    }

    public V remove(String key) {
        // 找到最后一个节点
        Node<V> node = node(key);
        // 如果不是单词结尾, 不用做任何处理
        if (node == null || !node.word) return null;
        size--;
        V oldValue = node.value;

        // 如果还有子节点
        if (node.children != null && !node.children.isEmpty()) {
            node.word = false;
            node.value = null;
            return oldValue;
        }

        // 如果没有子节点
        Node<V> parent = null;
        while ((parent = node.parent) != null) {
            parent.children.remove(node.character);
            if (parent.word || !parent.children.isEmpty()) break;
            node = parent;
        }

        return oldValue;
    }

    public boolean startsWith(String prefix) {
        return node(prefix) != null;
    }

    private Node<V> node(String key) {
        keyCheck(key);

        Node<V> node = root;
        int len = key.length();
        for (int i = 0; i < len; i++) {
            if (node == null || node.children == null || node.children.isEmpty()) return null;
            char c = key.charAt(i);
            node = node.children.get(c);
        }

        return node;
    }

    private void keyCheck(String key) {
        if (key == null || key.length() == 0) {
            throw new IllegalArgumentException("key must not be empty");
        }
    }

    private static class Node<V> {
        Node<V> parent;
        HashMap<Character, Node<V>> children;
        Character character;
        V value;
        boolean word; // 是否为单词的结尾（是否为一个完整的单词）
        public Node(Node<V> parent) {
            this.parent = parent;
        }
    }
}
```

```java
package com.coderZsq;

public class KMP {

    public static int indexOf(String text, String pattern) {
        if (text == null || pattern == null) return -1;
        char[] textChars = text.toCharArray();
        int tlen = textChars.length;
        if (tlen == 0) return -1;
        char[] patternChars = pattern.toCharArray();
        int plen = patternChars.length;
        if (plen == 0) return -1;
        if (tlen < plen) return -1;

        // next表
        int[] next = next(pattern);

        int pi = 0, ti = 0, lenDelta = tlen - plen;
        while (pi < plen && ti - pi <= lenDelta) {
            if (pi < 0 || textChars[ti] == patternChars[pi]) {
                ti++;
                pi++;
            } else {
                pi = next[pi];
            }
        }
        return (pi == plen) ? (ti - pi) : -1;
    }

    private static int[] next(String pattern) {
        char[] chars = pattern.toCharArray();
        int[] next = new int[chars.length];

        // n == next[i]
        next[0] = -1;
        int i = 0;
        int n = -1;
        int iMax = chars.length - 1;
        while (i < iMax) {
            if (n < 0 || chars[i] == chars[n]) {
                ++i;
                ++n;
                if (chars[i] == chars[n]) {
                    next[i] = next[n];
                } else {
                    next[i] = n;
                }
            } else {
                n = next[n];
            }
        }
        return next;
    }

    private static int[] next2(String pattern) {
        char[] chars = pattern.toCharArray();
        int[] next = new int[chars.length];

        // n == next[i]
        next[0] = -1;
        int i = 0;
        int n = -1;
        int iMax = chars.length - 1;
        while (i < iMax) {
            if (n < 0 || chars[i] == chars[n]) {
                next[++i] = ++n;
            } else {
                n = next[n];
            }
        }
        return next;
    }
}
```