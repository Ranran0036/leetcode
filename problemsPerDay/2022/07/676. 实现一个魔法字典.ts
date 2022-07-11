class MagicDictionary {
    root: Trie_;
    constructor() {
        this.root = new Trie_();
    }

    buildDict(dictionary: string[]): void {
        for (const word of dictionary) {
            let cur = this.root;

            for (let i = 0; i < word.length; i++) {
                const ch = word[i];
                const idx = ch.charCodeAt(0) - "a".charCodeAt(0);
                if (!cur.child[idx]) {
                    cur.child[idx] = new Trie_();
                }

                cur = cur.child[idx];
            }

            cur.isFinished = true;
        }
    }

    search(searchWord: string): boolean {
        return dfs(searchWord, this.root, 0, false);
    }
}

function dfs(searchWord: string, node: Trie_, pos: number, modified: boolean): boolean {
    if (pos === searchWord.length) {
        return modified && node.isFinished;
    }

    let idx = searchWord.charCodeAt(pos) - "a".charCodeAt(0);

    if (node.child[idx]) {
        if (dfs(searchWord, node.child[idx], pos + 1, modified)) {
            return true;
        }
    }

    if (!modified) {
        for (let i = 0; i < 26; i++) {
            if (i !== idx && node.child[i]) {
                if (dfs(searchWord, node.child[i], pos + 1, true)) {
                    return true;
                }
            }
        }
    }

    return false;
}

class Trie_ {
    isFinished: boolean;
    child: Trie_[];

    constructor() {
        this.isFinished = false;
        this.child = new Array(26).fill(0);
    }
}
