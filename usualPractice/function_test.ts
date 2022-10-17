function showName(firstName: string = "诸葛", lastName?: string): string {
    return firstName + (lastName ? lastName : "");
}

console.log(showName(undefined, "孔明"));
