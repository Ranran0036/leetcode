class TrieNode {
    tns: TrieNode[] = new Array<TrieNode>();
    idxs: number[] = new Array<number>();
}

class WordFilter {
    add(p: TrieNode, s: string, idx: number, isTurn: boolean): void {
        const n = s.length;
        p.idxs.push(idx);
        for (let i = isTurn ? n - 1 : 0; i >= 0 && i < n; i += isTurn ? -1 : 1) {
            const u = s.charCodeAt(i) - "a".charCodeAt(0);
            if (p.tns[u] == null) p.tns[u] = new TrieNode();
            p = p.tns[u];
            p.idxs.push(idx);
        }
    }

    query(a: string, b: string): number {
        let n = a.length,
            m = b.length;
        let p = this.tr1;
        for (let i = 0; i < n; i++) {
            const u = a.charCodeAt(i) - "a".charCodeAt(0);
            if (p.tns[u] == null) return -1;
            p = p.tns[u];
        }
        const l1 = p.idxs;
        p = this.tr2;
        for (let i = m - 1; i >= 0; i--) {
            const u = b.charCodeAt(i) - "a".charCodeAt(0);
            if (p.tns[u] == null) return -1;
            p = p.tns[u];
        }
        const l2 = p.idxs;
        n = l1.length;
        m = l2.length;
        for (let i = n - 1, j = m - 1; i >= 0 && j >= 0; ) {
            if (l1[i] < l2[j]) j--;
            else if (l1[i] > l2[j]) i--;
            else return l1[i];
        }
        return -1;
    }

    tr1: TrieNode = new TrieNode();
    tr2: TrieNode = new TrieNode();
    constructor(ss: string[]) {
        for (let i = 0; i < ss.length; i++) {
            this.add(this.tr1, ss[i], i, false);
            this.add(this.tr2, ss[i], i, true);
        }
    }
    f(a: string, b: string): number {
        return this.query(a, b);
    }
}
