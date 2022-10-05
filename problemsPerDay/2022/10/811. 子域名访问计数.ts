function subdomainVisits(cpdomains: string[]): string[] {
    const map: Map<string, number> = new Map<string, number>();

    for (const cpdomain of cpdomains) {
        const cpdArr = cpdomain.split(" ");
        let times: number = Number(cpdArr[0]);
        let domains: string = cpdArr[1];

        map.set(domains, (map.get(domains) || 0) + times);

        for (let i = 0; i < domains.length; i++) {
            if (domains[i] === ".") {
                const subDomain = domains.slice(i + 1);
                map.set(subDomain, (map.get(subDomain) || 0) + times);
            }
        }
    }

    const res: string[] = new Array<string>();

    for (const [domain, times] of map) {
        res.push(`${times} ${domain}`);
    }

    return res;
}
